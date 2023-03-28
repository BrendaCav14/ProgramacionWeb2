const express = require('express')
const initdb = require('./config/mongo')
const app = express()

const port = 3001



app.listen(port, ()=>{
    console.log('aplicacion esta en linea')
})

initdb();  