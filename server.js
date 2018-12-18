const express = require('express');
// const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // CUSTOM ROUTES GO HERE
  // server.get('/blog/article/:slug', (req, res) => {
  //   const mergedQuery = Object.assign({}, req.query, req.params);
  //   return app.render(req, res, '/blog', mergedQuery);
  // });

  server.get('/song/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/song', mergedQuery);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 5000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`🚡 Ready on port ${port}...`);
  });
});
