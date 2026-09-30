// Vercel requires a root Node entrypoint for this project configuration.
// Static assets remain in /public; this function serves the application shell.
module.exports = (req, res) => {
  if (req.url !== '/') return res.status(404).send('Not found');
  // Vercel serves public files separately from the function bundle.
  return res.redirect(307, '/index.html');
};
