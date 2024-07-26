const express = require('express')
const app = express()
const osuRoutes = require('./routers/osu.js')
const callbackRoutes = require('./routers/callback.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', osuRoutes)
app.use('/callback', callbackRoutes)

app.listen(8000,() => {
    "server is now running"
})