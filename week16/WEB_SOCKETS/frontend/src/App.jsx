import { WebSocket } from '@typetron/websockets'
import './App.css'

function App() {
  const ws=new WebSocket("ws://localhost:3000")

  function handleClick() {  
    ws.send("ping");
    ws.onMessage((message) => {
      alert(message);
    });
  }

  return (
    <>
    <div className='text-white bg-black flex-col justify-center items-center h-screen'> 
      <h1>Websockets</h1> 
      <input type="text" id="message" placeholder="Enter your message" /> 
      <button id="send" onClick={handleClick}>Send</button> 
    </div>
      </>
  )
}

export default App
