import { useEffect, useRef} from "react";

export function usePrev(value){
    const ref=useRef();

    useEffect(
        ()=>{
        ref.current=value;
        },[value]
    );

    return ref.current;   //first returns and then useEffect
}



import { useState, useEffect } from 'react';
import './App.css';
import { usePrev } from './components/usePrev';

function App() {
  const [value,setValue]=useState(0);
  const prev=usePrev(value);
 return(
  <div>
  <h1>{value} Real</h1>
  <h1>{prev} Prev</h1>
  <button onClick={()=>setValue(val=>val+1)}>Increase</button>
  </div>
 )
}

export default App;
