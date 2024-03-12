const express = require('express')
const app = express(); 

const http = require('http')
const server = http.createServer(app)
const path = require('path')
const port = process.env.PORT || 3000; 
app.use('/', express.static(path.join(__dirname, 'public'))); 

const socketio = require('socket.io')
const io = socketio(server); 

const users = {}; 

io.on('connection', (socket)=>{
    console.log('connection established', socket.id)

    socket.on('send-msg', (data)=>{ // listen to some event
        // console.log(data)
        // socket.emit('received-msg', {
        //     msg:data.msg, 
        //     id : socket.id
        // })

        io.emit('received-msg', {
            msg:data.msg, 
            id : socket.id,
            username: users[socket.id]
        })
    }) 

    socket.on('login', (data)=>{
        console.log(data)
        users[socket.id] = data.username // mapping the socket id with userName 
    })

})


server.listen(port, ()=>{
    console.log('server connected at port', port); 
})

