import http from "http";
import socketIo from "socket.io";
import MessageModel from "../2-models/message-model";


// Socket.io logic:
function init( httpServer: http.Server ):void {

    // CORS options:
    const options = { cors: { origin: "*" } };

    // Create Socket.io Server:
    const socketServer = new socketIo.Server(httpServer, options);

    
    // 1. Listen to cilets connections:
    socketServer.sockets.on("connection", (socket: socketIo.Socket) => { // Must be named 'connection'
        console.log("Client has been connected...");

        // 3. Listening to messages from cilent:
        socket.on("msg-from-cilent", ( msg:MessageModel ) => { 
            console.log("Client sent message: ", msg );

            // 6. Send message to Cilent:
            socketServer.sockets.emit("msg-from-server", msg);
        });
        

        // 7. Listen to Specific Client Disconnect:
        socket.on("disconnect", () => { // Must be named 'disconnect'
            console.log("Client has been Disconnected...");
        })

    })


}


export default {
    init
}