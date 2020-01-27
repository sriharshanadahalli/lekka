const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const PublicPath = path.join(__dirname, '../public')
console.log(PublicPath);






app.listen(port, ()=> {
    console.log('Server is Running at '+ port);
    
})