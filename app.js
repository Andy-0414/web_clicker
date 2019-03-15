const express = require('express');
const app = express();

const MONGO = require('./modules/mongoConnectionModule')

const User = require('./schema/User')

app.use(express.static('./docs'))

app.listen(3000,()=>{
    console.log("CLICKER!")
})

app.get('/',(req,res)=>{
    res.sendfile('./docs/index.html')
})

