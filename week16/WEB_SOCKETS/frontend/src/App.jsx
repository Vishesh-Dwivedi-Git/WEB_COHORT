
import { useEffect } from 'react';
import './App.css'

function App() {
  const ws=new WebSocket("ws://localhost:8081");
  useEffect(() => {
     ws.onmessage=(event)=>{  
       alert(event.data);
     }
  },[ws]);

  function handleClick() {  
    ws.send("ping");
  }

  return (
  
    <div className='text-white font-mono bg-black flex flex-col justify-center items-center h-screen'> 
      <h1>Websockets</h1> 
      <input type="text" id="message" placeholder=" Enter your message" className='text-black rounded-md border border-blue-500' /> 
      <button id="send" onClick={handleClick}>Send</button> 
    </div>
    
  )
}

export default App
