import React, { useEffect, useState } from 'react'

const LinkdinBell = () => {
 const [count,setCount]=useState(1);

 useEffect(function (){
  const intervalId=setInterval(() => {
    setCount(prev=>prev+1)
  }, 1000);
 
 return ()=> clearInterval(intervalId);
},[])
 
  return (
    <div>
    <span className='ml-8 block h-7 w-7 text-center rounded-full bg-red-600'>{count}</span>
      <img className=" w-17 h-16" src='\src\assets\bell-removebg-preview.png'>
      </img>
    </div>
  )
}

export default LinkdinBell
