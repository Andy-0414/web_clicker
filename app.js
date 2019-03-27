const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


const MONGO = require('./modules/mongoConnectionModule')

const User = require('./schema/User')

http.listen(3000, () => {
    console.log("server open");
})

app.use(express.static('./docs'))

app.get('/',(req,res)=>{
    res.sendfile('./docs/index.html')
})