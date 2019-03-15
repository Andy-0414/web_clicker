const express = require('express');
const app = express();

const MONGO = require('./modules/mongoConnectionModule')

app.use(express.static('./docs'))

app.listen(3000,()=>{
    console.log("Hello World!")
})

app.get('/',(req,res)=>{
    res.sendfile('./docs/index.html')
})

