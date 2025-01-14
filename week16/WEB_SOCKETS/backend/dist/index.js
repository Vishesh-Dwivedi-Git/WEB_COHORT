"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
//websocket server 
const wss = new ws_1.WebSocketServer({ port: 8081 });
wss.on("connection", function (socket) {
    socket.on("message", (e) => {
        const message = e.toString();
        console.log("Received:", message);
        if (message.trim() === "ping") { // Ensure trimming whitespace
            socket.send("pong");
        }
        else {
            socket.send("Unknown message");
        }
    });
});
