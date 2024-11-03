import { useState } from 'react'
import './App.css'
import AgeVerification from './components/AgeVerification'
import OTPpage from './components/OTPpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <OTPpage/>
  )
}

export default App
