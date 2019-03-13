const express = require('express');
const app = express();

const MONGO = require('./modules/mongoConnectionModule')

app.listen(3000,()=>{

})

app.get('/',(req,res)=>{
    res.sendfile('./docs/index.html')
})