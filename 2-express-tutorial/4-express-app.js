const express = require('express')
const app = express()
const path = require('path');



app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not Found</h1>')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000');
})
