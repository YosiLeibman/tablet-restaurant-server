// import the lib
const express = require('express')

const cors = require('cors')

// config the env variables
require('dotenv').config()

// create server
const app = express()

// import the router files
const ordersRouteFile = require('./orders')
const waitersRouteFile = require('./waiters')

// middleweres
app.use(cors())
app.use(express.json())
app.use('/orders', ordersRouteFile)
app.use('/waiters', waitersRouteFile)

// public folder
app.use(express.static('dist'))

// root route
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/dist/index.html')
})

// run the server
app.listen(80, () => console.log('hey from port 80'))
