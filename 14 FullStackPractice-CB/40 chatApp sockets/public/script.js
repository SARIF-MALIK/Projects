
const socket = io(); 

$('#send-btn').on('click', ()=>{
    const msgText = $('#inp').val(); 
    // console.log(msgText); 
    if(!msgText){
        return
    }
    socket.emit('send-msg', {
        msg:msgText
    })

    $('#inp').val("")
})

socket.on('received-msg', (data)=>{
    // console.log(data); 
    
    $('#chat').append(`<li><span> ${data.username}</span> ${data.msg}</li>
    `)
})

// hiding chat box to login first 
$('#chat-box').hide()

// login functionality 
$('#login-btn').on('click', ()=>{
    // console.log('clicked')
    const username = $('#username').val(); 
    if(!username){
        return; 
    }
    socket.emit('login', {
        username:username
    })
    $('#login').hide(); 
    $('#chat-box').show(); 
    $('#username').val(""); 
})
