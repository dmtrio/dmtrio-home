const functions = require('firebase-functions'); // // Create and Deploy Your First Cloud Functions
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: true,
  conf: { distDir: 'next' }
});
const handle = app.getRequestHandler(); 

module.exports.ssr = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res)).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });  
});

// module.exports.ssr = functions.https.onRequest((req, res) => {
//   return app.prepare()
//     .then(() => {
//       const server = express()
//       server.get('/p/:id', () => {
//         const actualPage = '/post'
//         const queryParams = { title: req.params.id }
//         app.render(req, res, actualPage, queryParams)
//       })
//       server.get('*', () => {
//         return handle(req, res)
//       })
//       // return server(req, res);
//     })
//     .catch(ex => {
//       console.error(ex.stack)
//       process.exit(1)
//     })
// });