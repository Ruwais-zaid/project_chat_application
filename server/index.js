const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://project-chat-application-api.vercel.app/",
        methods: ['GET', 'POST'],
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join', (data) => {
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room ${data}`);
    });
    socket.on('sendMessage',(data)=>{
        socket.to(data.room).emit('recievedMessage',data)

    })

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3001;
app.get('/',(req,res)=>{
    res.send('SERVER IS RESPONDING')
})
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
