
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [tab,setTab]=useState(1);
    const[data,setData]=useState({});
    const[Loading,setLoading]=useState(true);
    //fetch api
    useEffect(()=>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos/"+tab)
        .then(async res=>{
            const json=await res.json();
            setData(json); 
            setLoading(false);           
        });
    },[tab]);
  return (
    <div className='space-x-2 ml-2 mt-2'>
    <button onClick={()=>{
        setTab(1)
    }} style={{color: tab==1 ? "red" : "black"}} className='border-2 border-black rounded-lg pl-3 pr-3'>Feed</button>
    <button onClick={()=>{
        setTab(2)
    }} style={{color: tab==2 ? "red" : "black"}} className='border-2 border-black rounded-lg pl-3 pr-3' >Notification</button>
    <button onClick={()=>{
        setTab(3)
    }} style={{color: tab==3 ? "red" : "black"}} className='border-2 border-black rounded-lg pl-3 pr-3' >Message</button>
    <button onClick={()=>{
        setTab(4)
    }} style={{color: tab==4 ? "red" : "black"}} className='border-2 border-black rounded-lg pl-3 pr-3'>Jobs</button>
    {Loading?"loading....":data.title}
    </div>
    
  )
}

export default UseEffect
