import React from 'react'
import { useState } from 'react'

const ModalsImple = ({isOpen,close}) => {
 if(!isOpen) return null;
 return(
     <div className='rounded-lg p-3 border border-gray-50 text-white bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 w-[200px]'>
        <h1 className='mr-5 ml-5'>Welcome to the App!</h1>
        <div className='mt-5 mr-5 ml-5'><p >Vishesh Dwivedi @Google</p>
        <p>Openeing new company ! Entrepreneur</p>
        <button onClick={close} className='border border-yellow-50 text-white rounded-lg p-3'>
            cross
        </button></div>
        </div> 
 )
}



const Modals = () => {
    const [isOpen,setOpen]=useState(true);
    function close(){
        setOpen(!isOpen);
    }
  return (
    <div>
        <button className='border border-yellow-50 text-white rounded-lg p-3  bg-slate-800' onClick={close}>toggle</button>
    <ModalsImple isOpen={isOpen} setOpen={setOpen} close={close}>
    </ModalsImple>
    </div>
    
  )
}

export default Modals
