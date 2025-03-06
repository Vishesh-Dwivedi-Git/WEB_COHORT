import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
useEffect(function (){
  console.log("setting");
 const interval=setInterval(()=>{
    setCount((count)=>count+1);
  },1000);
 return ()=>{
     clearInterval(interval);
    console.log('clearing Interval');
   }
},[]);

    
  return (
    <>
      {console.log("Re Rndering")}
      <h1>Hello world {count}</h1>
      <p>Welcome to the Vishesh @Google</p>
      
    </>
  )
}

export default App
