const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.static('public'));

let seats = {
  A1: 'available',
  A2: 'available',
  A3: 'available',
  A4: 'available',
  A5: 'available',
  A6: 'available',
  A7: 'available',
  A8: 'available',
  A8: 'available',
  A9: 'available',
  A10: 'available',
  A11: 'available',
  A12: 'available',
  A13: 'available',
  A14: 'available',
  A15: 'available',
  A16: 'available',
  A17: 'available',
  A18: 'available',
  A19: 'available',
  A20: 'available'
};

// Handle real-time seat locking
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Send initial seat data to the client
  socket.emit('seats', seats);


  // Handle seat locking
  socket.on('lockSeat', (seat) => {
    if (seats[seat] === 'available') {
      seats[seat] = 'locked';
      io.emit('seats', seats); // Broadcast updated seat data
     
    }
  });

  socket.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    console.log('Sending seats data:', seats);
    socket.emit('seats', seats)
});


  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
