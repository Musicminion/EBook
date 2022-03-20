
























// const path = require('path');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'user.js'));
// const middlewares = jsonServer.defaults();
//
// const expireTime = 1000 * 60;
//
// server.use(jsonServer.bodyParser);
// server.use(middlewares);
//
// server.post('/login', function (req, res, next) {
//     res.header('Access-Control-Expose-Headers', 'access-token');
//     const {account, password} = req.body;
//     if (account === 'admin' && password === '123') {
//         // res.header('access-token', Date.now());
//
//         res.json(true);
//     } else {
//         res.json(false);
//     }
// });
//
// // server.use(require('./auth'));
// server.use(router);
//
// server.post('/checkStatus',function (req, res, next){
//         res.header('Access-Control-Expose-Headers', 'access-token');
//         const now = Date.now();
//
//         let unauthorized = true; // 未授权
//         const token = req.headers['access-token'];
//         if (token) {
//             const ifExpired = now - token > expireTime;
//             if (!ifExpired) {
//                 unauthorized = false;
//                 res.header('access-token', now);
//             }
//         }
//
//         if (unauthorized) {
//             res.sendStatus(401);
//         } else {
//             res.json(true);
//         }
//     }
//
//     )
//
//
//
// server.listen(8000, function () {
//     console.log('JSON Server is running in http://localhost:8000');
// });