import { Socket, io } from "socket.io-client";
import "./Home.css";

let socket:Socket;

function Home(): JSX.Element {

    const connect = () => {

        // 2. Connecting to backend:
        socket = io("http://localhost:4000");

        // 5. Listening to messages from server:
        socket.on("msg-from-server", (msg: string) => {
            console.log("Server sent message: " + msg )
        })

    }

    const send = () => {

        // 4. Send message to Server:
        socket.emit("msg-from-cilent", "Hello Server! i'm your Cilent...")
    
    }
    
    const disconnect = () => {

        // 8. Disconnect from server:
        socket.disconnect();
    
    }


    return (
        <div className="Home">
			<button onClick={connect}>Connect</button>
			<button onClick={disconnect}>Disconnect</button>
			<button onClick={send}>Send</button>
        </div>
    );
}

export default Home;
