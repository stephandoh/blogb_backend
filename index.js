require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const userRoute = require('./src/routes/userRoute')

const db = process.env.dbLink
const port = process.env.PORT

const app = express()

app.use(express.static('images'))

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},()=>{
    app.listen(port, () => {
        console.info('application started')
    })
})

// middleware
app.use(express.json())

// routes
app.use(userRoute)

app.get('/', (req,res)=>{
    res.status(200).send('<h1>hello</h1>')
})