import React, { useState } from 'react'
import { useRef } from 'react';

const OTP = ({number}) => {
    const ref=useRef([]);
  return (
    <div className='flex '>
   {Array(number).fill(1).map((x,index)=><SubOtp refrence={e=>ref.current[index]=e} key={index} onDone={()=>{
    if(index+1>=number){
        return ;
    }
    else{
        ref.current[index+1].focus();
    }
   }}
   goBack={
    e=>{
        if(index-1<0) return;
        else{
            ref.current[index-1].focus();
        }
    }
   }

   />)}
   </div>
  )
}

function SubOtp({refrence, onDone , goBack}){

    const [inputBoxVal,setInputBoxVal]=useState("");
    
    return (
        <div>
            <input 
             value={inputBoxVal} 

             ref={refrence}

             onKeyUp={e=>{
                if(e.key==="Backspace"){
                    setInputBoxVal("");
                    goBack();

                }
             }}

             onChange={e=>{
                const val=e.target.value;

                if(val=="1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9"){
                    setInputBoxVal(val);
                    onDone();
                }
                else{

                }
             }}
             maxLength={1}
                type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
            />
        </div>
    )
}
export default OTP
