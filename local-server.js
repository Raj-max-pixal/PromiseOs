const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 3000;
const types = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8' };
const reply = (res, code, data) => { res.writeHead(code, {'Content-Type':'application/json; charset=utf-8'}); res.end(JSON.stringify(data)); };
const readBody = req => new Promise((resolve,reject) => { let raw=''; req.on('data', c => { raw+=c; if(raw.length>1e6) req.destroy(); }); req.on('end',()=>{try{resolve(JSON.parse(raw||'{}'))}catch{reject(Error('Invalid JSON'))}}); });
async function nebius(p) {
  const key = p.apiKey || process.env.NEBIUS_API_KEY;
  if (!key) throw Error('Add a Nebius API key in Settings, or set NEBIUS_API_KEY before starting the app.');
  const base = (p.endpoint || process.env.NEBIUS_BASE_URL || 'https://api.tokenfactory.nebius.com/v1').replace(/\/$/,'');
  const r = await fetch(base+'/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({model:p.model||'nvidia/Nemotron-3-Nano-30B-A3B',messages:p.messages,temperature:p.temperature??.25,max_tokens:p.maxTokens??1400})});
  const data = await r.json(); if (!r.ok) throw Error(data.error?.message || `Nebius returned ${r.status}`); return data.choices?.[0]?.message?.content || '';
}
http.createServer(async(req,res)=>{
  const u = new URL(req.url,`http://${req.headers.host}`);
  if(req.method==='POST'&&u.pathname==='/api/chat'){try{reply(res,200,{content:await nebius(await readBody(req))})}catch(e){reply(res,400,{error:e.message})}return}
  if(req.method!=='GET') return reply(res,405,{error:'Method not allowed'});
  const target = u.pathname==='/'?'/index.html':u.pathname, file = path.resolve(root,'.'+target);
  if(!file.startsWith(root))return reply(res,403,{error:'Forbidden'});
  fs.readFile(file,(e,data)=>{if(e)return reply(res,404,{error:'Not found'});res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data)});
}).listen(port,()=>console.log(`PromiseOS running at http://localhost:${port}`));
