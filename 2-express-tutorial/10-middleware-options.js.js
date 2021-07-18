
const express = require('express')
const app = express()
const authorize = require('./authorize')
const morgan = require('morgan')

const logger = require('./logger')
//app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})
 
app.listen(5000, ()=>{
    console.log('server is listening on port 5000');
})
