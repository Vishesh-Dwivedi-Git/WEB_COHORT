import React, { useState } from 'react'
import OTP from './OTP'

const OTPpage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center  bg-[#002b5b]'>
      {/* header */}
      <div className='flex justify-center mt-[130px] mb-[100px] space-x-2'>
      <img id='img1' src='src\assets\Screenshot 2024-11-03 162930.png' alt='img' className='h-[31px] w-[23px] mt-1'></img>
        <div className='flex'> <p className='text-[#3bf5dc] font-semibold text-2xl'>Webinar</p><p className='text-white font-semibold text-2xl'>.gg</p></div> 
      </div>

      {/* main content */}

      <div className='flex flex-col justify-center items-center space-y-[40px] mb-[10px]'>
       <h1 className='text-white font-medium text-2xl'>Check Your Email For A Code</h1>
       <div>
       <p className='text-gray-400 '>Please enter the verification code sent to your email id prabhleen@gmail.com</p>
       <div className='flex flex-col justify-center items-center space-x-2 text-gray-400 space-y-2'>
       <OTP number={5} />
       <div className='flex space-x-2'>
            <img alt='clock'></img>
            <p>09:32</p>
       </div>
       </div>
       </div>
      
      <div className='space-y-2'>
      <button className=' bg-[#13f0d2] w-full text-center font-medium text-md px-4 py-2 rounded-md text-[#002b5b]'>Verify</button>
      <p className='text-gray-400 '>Can't find the email?Click <a className='text-white cursor-pointer underline'>here</a> to resend.</p>
      </div>
      </div>
    </div>
  )
}

export default OTPpage
