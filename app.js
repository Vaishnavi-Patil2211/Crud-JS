const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/AlienDBex'

const app = express()


mongoose.connect(url,{useNewUrlparser:true})
const con = mongoose.connection

con.on('open', () =>{
    console.log('connected...')
})

app.use(express.json())



const alienRouter = require('./routers/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,() => {
    console.log('server started')
})