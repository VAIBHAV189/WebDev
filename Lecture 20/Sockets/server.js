const express=require('express')
const http=require('http')
const socketio=require('socket.io')

const app=express()
const server=http.Server(app)
const io=socketio(server)

app.use('/',express.static(__dirname+'/public'))

let idUsernameMap={}
io.on('connection',(socket)=>{

    console.log('Connected '+socket.id)
    //Client se kuch request aa rahi to hai to kkya karna hai uske liye socket.on
    
    socket.on('chat',(data)=>{
        console.log(socket.id+' says '+ data.msg)
        // socket.emit('chat_received')
        // socket.broadcast.emit('chat_received') //broadcast karne se sirf khud ko nhi dikhta baki sbko dikhta
        io.emit('chat_received',{
            username:idUsernameMap[socket.id],
            msg:data.msg
        })//io.emit se sare sockets pe jata hai message
        
    })

    socket.on('login',(data)=>{
        idUsernameMap[socket.id]=data.username
        socket.emit('loggedIn')
    })


})

server.listen(4321,()=>{
    console.log("Server started at ",'http://localhost:4321')
})