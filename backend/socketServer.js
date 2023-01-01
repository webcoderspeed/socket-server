
import { Server } from 'socket.io';


const createSocketServer = (server) => {
  try {
    const io = new Server(server, {
      cors: {
        origin: '*'
      },
    });

    return io;
  } catch (error) {
    console.log('Error in establishing socket connection');
  }
};

export default createSocketServer;