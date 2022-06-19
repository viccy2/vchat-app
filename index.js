const express = require('express');
const routes = require('./api/router');
const socket = require('socket.io');
const app = express();

//Connection to port
const server = app.listen(3000);

const io = socket(server);

//Middle Ware
app.use(express.static('public'));
app.use('/api',routes);

io.on('connection', (socket) => {
    console.log('working',socket.id);

    socket.on('chat', (data) =>{
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});

