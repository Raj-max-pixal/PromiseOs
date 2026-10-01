/** Vercel serverless proxy for Nebius Token Factory. */
module.exports = async (req, res) => {
  const send = (status, body) => { res.statusCode = status; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)); };
  if (req.method !== 'POST') return send(405, { error: 'Method not allowed' });
  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const key = payload.apiKey || process.env.NEBIUS_API_KEY;
    if (!key) return send(400, { error: 'Add a Nebius API key in Settings, or configure NEBIUS_API_KEY in Vercel.' });
    const base = (payload.endpoint || process.env.NEBIUS_BASE_URL || 'https://api.tokenfactory.nebius.com/v1').replace(/\/$/, '');
    const response = await fetch(`${base}/chat/completions`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body: JSON.stringify({ model: payload.model || 'nvidia/Nemotron-3-Nano-30B-A3B', messages: payload.messages, temperature: payload.temperature ?? 0.25, max_tokens: payload.maxTokens ?? 1400 }) });
    const data = await response.json();
    if (!response.ok) return send(response.status, { error: data.error?.message || `Nebius returned ${response.status}` });
    return send(200, { content: data.choices?.[0]?.message?.content || '' });
  } catch (error) { return send(500, { error: error.message || 'Unable to reach Nebius' }); }
};
