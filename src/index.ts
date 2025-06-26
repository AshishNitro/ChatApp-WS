import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });


interface User{
    socket: WebSocket;
    room: String;




}

let allSockets: User[] = [];

wss.on("connection",(socket) => {
    socket.on("message", (message) =>{
        const parsedMessage = JSON.parse(message);
        
    })
} )

