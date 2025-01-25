"use client";
import { useEffect,useState,useRef } from "react";


const Chat= () => {
    const [message,setMessage]=useState<string[]>([]);
    const [room, setRoom ]=useState<string>("");
    const [inputMessage,setInputMessage]=useState<string>("");
    const ws=useRef<WebSocket>();
   
    useEffect(()=>{
        ws.current= new WebSocket("ws://localhost:8081");



        ws.current.onopen=()=>{
            console.log("Connected to the server");
        }
        ws.current.onmessage=(event:MessageEvent)=>{
                 const data=JSON.parse(event.data);
                 console.log(data);
                 if(data.type==="chat"){
                    setMessage((prev)=>[...prev,data.message]);
                 }
        }
        ws.current.onclose=()=>{
            console.log("Disconnected from the server");
        }  
        return ()=>{
            ws.current?.close();
        } 
     },[]);
    
    
    const handleRoom=()=>{
        console.log("Sending Room ");
        if(ws.current){
        ws.current.send(JSON.stringify({type:"join",room:room}));
        alert("Entered the Room"+room);
    }
    }

    const handleMessage=()=>{
        console.log("Sending messages")
        if(ws.current && inputMessage){
        ws.current.send(JSON.stringify({type:"chat",message:inputMessage}));
       console.log("Sent:",inputMessage);

    }
}
  return (
    <div className="bg-slate-800 text-white flex flex-col items-center justify-center h-screen space-y-4 py-4">    
        <div>
            <h1 className="text-5xl font-bold">Welcome to Chat App</h1>
            <p className="text-2xl">Please login to continue</p>
        </div>
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
        <div className="border border-white bg-slate-700 rounded-lg h-[75vh] w-[75vw] flex flex-col items-center justify-center overflow-hidden">
            
                {message.map((msg,indx)=>(
                <div className="bg-slate-800 text-white p-2 m-2 rounded-lg" key={indx}>
                        {msg}

                    </div>
                ))}
            
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
            <input type="text" id="room" placeholder="Enter your Room No" className="bg-slate-700 text-white border border-white rounded p-2"value={room} onChange={(e)=>{setRoom(e.target.value)}} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded required:" onClick={handleRoom}>Enter the Room</button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
            <input type="text" placeholder="Enter your message" className="bg-slate-700 text-white border border-white rounded p-2" value={inputMessage}
            onChange={(e)=>{setInputMessage(e.target.value)}}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleMessage}>Send</button>
        </div>

    </div>
  )
}


export default Chat;