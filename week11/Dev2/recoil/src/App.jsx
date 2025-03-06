import React from 'react'
import  counter  from './componets/atom'
import { RecoilRoot,useRecoilValue,useSetRecoilState } from 'recoil'
import oddEv  from './componets/Selector'
import { memo } from 'react'

const App = () => {
  return (
   <RecoilRoot>
    <Counting/>
   </RecoilRoot>
  )
}

function Counting(){
  const count=useRecoilValue(counter);
  return(
    <div>
       {count}
      <Increase/>
      <Decrease/>
      <OddEven/>
    </div>
  )
}

const  Increase=memo(()=>{
  const setCount=useSetRecoilState(counter);
  return (

    <button onClick={()=>setCount(c=>c+2)}>Increase</button>
  )
});

const  Decrease=memo(()=>{
  const setCount=useSetRecoilState(counter);
  return (

    <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
  )
});


const OddEven=memo(()=>{
  const isEven=useRecoilValue(oddEv);
  return (
    <div>
       {isEven ? "Even": "Odd"}
    </div>
  )
});

export default App
