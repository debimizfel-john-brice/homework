import { Socket, io } from "socket.io-client";
import "./Home.scss";
import { SyntheticEvent, useRef, useState } from "react";
import MessageModel from "../../../Models/MessageModel";

let socket:Socket;

function Home(): JSX.Element {

    const [isConnected, setIsConnected ] = useState<boolean>(false);
    const [text, setText ] = useState<string>("");
    const [nickname, setNickname ] = useState<string>("");
    const [messages, setMessages ] = useState<MessageModel[]>([]);
    const inputElement = useRef(null);
    
    const connect = () => {

        // 2. Connecting to backend:
        socket = io("http://localhost:4000");

        // 5. Listening to messages from server:
        socket.on("msg-from-server", (msg: MessageModel) => {
            console.log("Server sent message: " + msg );
            setMessages( arr => [...arr, msg] );
        })

        setIsConnected(true);
        setTimeout(() => {
            inputElement.current.focus();
        }, 0)
    }

    const send = (ev:SyntheticEvent) => {
        ev.preventDefault();
        // 4. Send message to Server:
        socket.emit("msg-from-cilent", new MessageModel( nickname, text ));
        setText("");
        inputElement.current.focus();
    }
    
    const disconnect = () => {
        // 8. Disconnect from server:
        socket.disconnect();
        setIsConnected(false)
    }


    return (
        <div className="Home">

            <header>
                <input type="text" placeholder="Nickname" value={nickname} disabled={isConnected} onChange={e => setNickname(e.target.value)} />
			    <button onClick={connect} disabled={isConnected} >Connect</button>
			    <button onClick={disconnect} disabled={!isConnected} >Disconnect</button>
            </header>
            

            <div className="messages">
                {messages.map( (m,i) => <p key={i} className={m.nickname === nickname ? "self" : ""}><small>{m.nickname}</small> {m.message}</p>)}
            </div>

            <form onSubmit={send}>
                <input required ref={inputElement} type="text" value={text} disabled={!isConnected} onChange={ e => setText(e.target.value)}/>
			    <button disabled={!isConnected}>Send</button>
            </form>

            
        </div>
    );
}

export default Home;
