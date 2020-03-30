const Express = require('express')
const app = Express()
const route = require('./server/route/routes.js')

app.use(route)

app.listen(3000, () => console.log(`Fancy Todo listening on port ${3000}!`))