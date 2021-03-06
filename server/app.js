const Express = require('express')
const app = Express()
const route = require('./route')
const cors = require('cors')

app.use(cors())
app.use(Express.urlencoded({ extended: false }))
app.use(route)

app.listen(3000, () => console.log(`Fancy Todo listening on port ${3000}!`))