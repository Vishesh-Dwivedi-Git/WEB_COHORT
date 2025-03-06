import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route>
         
        </Route> 
        <Route>

        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
