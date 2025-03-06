import React from 'react'

const Children = () => {
  return (
    <div className=" bg-slate-700 flex flex-col p-5">
      <h1 className="text-red-600">Vishesh Dwivedi @ BlockChain</h1>
      {/* wrapping inside the Component */}
      <Card>
      <div className='flex flex-col items-center p-3 '>
      <label>What do you want to EAT?</label>
      <input className='border border-stone-950'/>
      <button>Submit</button>
      </div>
      </Card>
      <Card>
        hi there
      </Card>
    </div>
  )
}

function Card({children}){
    return(<div className="bg-white p-3 m-4 text-black rounded-lg ">
        {children}
    </div>)
}
export default Children

//Each child in the should have a specific key when parsing List in the components
//mounting unmounting lifecycle 