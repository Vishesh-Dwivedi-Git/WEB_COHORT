import { WebSocketServer } from "ws";
//websocket server 

const wss=new WebSocketServer({port:8081});

wss.on("connection",function(socket){   //like app.get
    socket.on("message", (e) => {
        const message = e.toString();
        console.log("Received:", message);
      
        if (message.trim() === "ping") { // Ensure trimming whitespace
          socket.send("pong");
        } else {
          socket.send("Unknown message");
        }
      });
      
});