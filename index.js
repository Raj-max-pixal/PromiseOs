// Vercel's Node runtime does not provide Express response helpers. Serve the
// small dependency-free client shell directly, while API routes stay separate.
const fs = require('fs');
const path = require('path');
const assets = { '/': 'index.html', '/index.html': 'index.html', '/client.js': 'client.js', '/agent.js': 'agent.js', '/style.css': 'style.css' };
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
module.exports = (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const asset = assets[pathname] || 'index.html';
  try {
    const file = path.join(__dirname, 'public', asset);
    res.statusCode = 200; res.setHeader('Content-Type', types[path.extname(asset)] || 'text/plain; charset=utf-8');
    return res.end(fs.readFileSync(file));
  } catch { res.statusCode = 500; return res.end('PromiseOS shell unavailable.'); }
};
