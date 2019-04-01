require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const userRoute = require('./routes/user/user')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api', userRoute)

app.listen(port, ()=> {
    console.log(`you are listening on port: ${port} `)
})