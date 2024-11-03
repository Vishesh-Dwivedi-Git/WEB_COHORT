import React from 'react'

const AgeVerification = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center  bg-[#002b5b]'>
      {/* header */}
      <div className='flex justify-center mt-[130px] mb-[100px] space-x-2'>
      <img id='img1' src='src\assets\Screenshot 2024-11-03 162930.png' alt='img' className='h-[31px] w-[23px] mt-1'></img>
        <div className='flex'> <p className='text-[#45f2dc] font-semibold text-2xl'>Webinar</p><p className='text-white font-semibold text-2xl'>.gg</p></div> 
      </div>

      {/* main content */}

      <div className='flex flex-col justify-center items-center space-y-[40px] mb-[10px]'>
       <h1 className='text-white font-medium text-2xl'>Let's Get Started</h1>
       <input className='bg-[#18406a] text-[#3f5f83] w-[400px] rounded-md px-3 py-2 font-medium text-sm' placeholder='Email Id'/>
       <button className=' bg-[#7f95ac] w-full text-center font-medium text-sm px-3 py-2 rounded-md text-[#e6eaef]'>Continue</button>

      </div>
    </div>
  )
}

export default AgeVerification
