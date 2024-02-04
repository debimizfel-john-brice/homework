import http from "http";
import socketIo from "socket.io";


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
        socket.on("msg-from-cilent", ( msg:string ) => { 
            console.log("Client sent message: " + msg )
        });

        // 6. Send message to Cilent:
        const timeId = setInterval(() => {
            socket.emit("msg-from-server", "Here is a rendom number: " + Math.random())
        }, 1000);

        // 7. Listen to Specific Client Disconnect:
        socket.on("disconnect", () => { // Must be named 'disconnect'
            console.log("Client has been Disconnected...");
            clearInterval(timeId);
        })

    })


}


export default {
    init
}