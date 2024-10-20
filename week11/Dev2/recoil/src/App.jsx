import { counter } from './store/atoms/counter' 
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter(){
  return (
    <>
      <Currentcount />
      <Increase />
      <Decrease />
    </>
  )
}

function Currentcount(){
  const count=useRecoilValue(counter);
  return(
    <div>
      {count}
    </div>
  )
}
function Increase(){
   const setCount=useSetRecoilState(counter);
  function increase(){
    setCount(c=>c+1);
  }
  return(
    <button onClick={increase}>
      Increase
    </button>
  )
}

function Decrease(){
  const setCount=useSetRecoilState(counter);
  function decrease(){
    setCount(c=>c-1);
  }
  return(
    <button onClick={decrease}>
      Decrease
    </button>
  )
}

export default App
