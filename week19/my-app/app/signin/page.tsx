"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default  function signIn(){
    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');
    const router=useRouter();

    return (
        <div className="flex flex-col items-center justify-center p-5 min-h-screen"> 
            <h1> Please Sign in here !</h1>
            <input type="text" placeholder="Enter the Username" value={username} className='text-black' onChange={(e)=>{
                setUsername(e.target.value); 
            }}/>

            <input type="text" placeholder="Enter the Password"  className='text-black' value={password } onChange={(e)=>{
                setPassword(e.target.value); 
            }}/>   
            //above method of changing react state and storing is not AT all fine 
            <button className='bg-blue-500 text-white p-4 rounded-md ' onClick={
                async()=>{
                    const data=await fetch('api/user/detail/signin',{
                        method:"POST",
                        headers:{
                            
                        'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            username,
                            password 
                        })
                    })
                    router.push('/signup');

                }

               
            }>
                
            Sign In        
        </button>                  
        </div>

        );

         
    

}