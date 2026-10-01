const base = () => process.env.SUPABASE_URL?.replace(/\/$/, '');
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY;
const send = (res, code, value) => { res.statusCode = code; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(value)); };
const supabaseHeaders = () => ({ apikey: key(), Authorization: `Bearer ${key()}`, 'Content-Type': 'application/json' });
module.exports = async (req, res) => {
  if (!base() || !key()) return send(res, 503, { error: 'Private memory sync is not configured.' });
  try {
    if (req.method === 'GET') {
      const url = new URL(req.url, 'http://localhost'), deviceId = url.searchParams.get('deviceId'), deviceSecret = url.searchParams.get('deviceSecret');
      if (!deviceId || !deviceSecret) return send(res, 400, { error: 'Private device credentials are required.' });
      const response = await fetch(`${base()}/rest/v1/memories?device_id=eq.${encodeURIComponent(deviceId)}&device_secret=eq.${encodeURIComponent(deviceSecret)}&order=updated_at.desc`, { headers: supabaseHeaders() });
      const body = await response.json(); return send(res, response.status, response.ok ? body : { error: body.message || 'Memory read failed.' });
    }
    if (req.method === 'POST') {
      let raw = ''; for await (const chunk of req) raw += chunk; const item = JSON.parse(raw || '{}');
      if (!item.id || !item.deviceId || !item.deviceSecret || !item.type || !item.title) return send(res, 400, { error: 'Incomplete memory payload.' });
      const row = { id: item.id, device_id: item.deviceId, device_secret: item.deviceSecret, type: item.type, title: item.title, content: item.content || '', source: item.source || 'PromiseOS', importance: item.importance || 'medium', status: item.status || 'saved', related_memory_ids: item.relatedMemoryIds || [], metadata: item.metadata || {}, updated_at: new Date().toISOString() };
      const response = await fetch(`${base()}/rest/v1/memories?on_conflict=id`, { method: 'POST', headers: { ...supabaseHeaders(), Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify(row) });
      return send(res, response.ok ? 201 : response.status, response.ok ? { ok: true } : { error: (await response.json()).message || 'Memory write failed.' });
    }
    return send(res, 405, { error: 'Method not allowed.' });
  } catch (error) { return send(res, 500, { error: 'Memory sync failed.' }); }
};
