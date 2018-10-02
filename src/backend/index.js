var app = require('http').createServer();
var io = module.exports.io= require('socket.io')(app)

const PORT = process.env.PORT || 3231

const server = require('./server')

io.on('connection', server)

app.listen(PORT, ()=>{
    console.log("connected to port:" + PORT);
})
