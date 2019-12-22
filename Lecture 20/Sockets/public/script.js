const socket=io()
setTimeout(() => {
    console.log('Connected '+socket.id)
}, 1000);

socket.on('chat_received',(data)=>{
    console.log("Chat succesfully received by the server")
    $('#chats').append(
        $('<li>').text(
            `${data.username}:${data.msg}`
        )     
    )
})

socket.on('loggedIn',()=>{
    $('#loginform').hide()
    $('#chatbox').show()
})

$(()=>{
    $('#chatbox').hide()
    $('#login').click(()=>{
        console.log("Login successful")
        socket.emit('login',{
            username:$('#username').val()
        })
    })
    $('#send').click(()=>{
        console.log('Sending chat') 
        socket.emit('chat',{
            msg:$('#msg').val() 
        })
    })
})