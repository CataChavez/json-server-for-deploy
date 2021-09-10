const jsonServer = require('json-server');
const auth = require('json-server-auth')

const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000;

server.use(middlewares)

server.db = router.db

const rules = auth.rewriter({
    // Permission rules
    users: 640,
    products: 644,
    store: 644

})

server.use(rules)
server.use(auth)
server.use(router)

//Servidor
server.listen(port, () => console.log(`API REST ON PORT ${port}`));