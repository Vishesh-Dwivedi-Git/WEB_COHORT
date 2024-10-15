import { useState } from 'react'
import './App.css'
import Children from './components/Children'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Children/>
    </>
  )
}

export default App
