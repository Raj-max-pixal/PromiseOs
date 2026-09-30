// Vercel requires a root Node entrypoint for this project configuration.
// Static assets remain in /public; this function serves the application shell.
const fs = require('fs');
const path = require('path');
module.exports = (req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') return res.status(404).send('Not found');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(fs.readFileSync(path.join(process.cwd(), 'public', 'index.html'), 'utf8'));
};
