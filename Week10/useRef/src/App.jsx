import { useState,createContext, useContext, Children } from 'react'
import './App.css'

//making a provider component
const BulbContext=createContext();

function BulbProvider({children}){  //context api doesnt reduce re renders so doesnt optimize , therefore use Library like recoil,redux 
  const [bulbOn,setbulbOn]=useState(true);
  return <BulbContext.Provider value={{bulbOn:bulbOn,setbulbOn:setbulbOn}}>
    {children}
  </BulbContext.Provider>
}

function App() {
  // const [bulbOn,setbulbOn]=useState(true);
  return (
    <>
     <BulbProvider>
      <Light/>
     </BulbProvider>

    {/* <BulbContext.Provider value={{
       bulbOn:bulbOn,
       setbulbOn:setbulbOn
    }
    }>
    <Light/>
    </BulbContext.Provider> */}
    </>
  )
}

function Light(){
  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const {bulbOn}=useContext(BulbContext);
  return <div>
    {bulbOn?"bulb is on": "bulb is off"}
  </div>
}

function LightSwitch(){
  const {bulbOn,setbulbOn}=useContext(BulbContext);
  function tog(){
    setbulbOn(!bulbOn);
  }
  return <div>
    <button onClick={tog}>Toggle Switch</button>
  </div>
}

export default App
