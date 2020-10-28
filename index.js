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

// root route
app.get('/', (req, res) => {
	res.send('welcome to my app =)')
})

// run the server
app.listen(1000, () => console.log('hey from prot 1000'))
