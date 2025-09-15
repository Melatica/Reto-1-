import http from 'http';
import { Server } from 'socket.io';
import app from './app';

const PORT = process.env.PORT || 4000;

// Crear servidor HTTP
const server = http.createServer(app);

// Configuración Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // Cambia a la URL de tu frontend en prod
    methods: ['GET', 'POST'],
  },
});

// Evento de conexión
io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.on('chat:message', (msg) => {
    io.emit('chat:message', msg); // Broadcast
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});

// Levantar servidor
server.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
