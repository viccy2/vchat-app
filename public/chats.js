const socket = io.connect('http://localhost:3000');


const name = document.querySelector('.name');
const message = document.querySelector('.message');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const feedback = document.querySelector('#feedback');

btn.addEventListener('click', (e) => {
    alert('message.value');
    socket.emit('chat',{
        message : message.value,
        name : name.value
    });
});
message.addEventListener('keypress', (e) => {
  
    socket.emit('typing', name.value);
});

socket.on('chat', (data) =>{

    output.innerHTML += '<p><strong>' + data.name + ' : </strong>' +  data.message + '</p>';

});

socket.on('typing', (data) =>{

    feedback.innerHTML += '<p><em>' + data + ' is typing a message...</em> ' + '</p>';

});


