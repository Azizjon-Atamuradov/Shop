import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
      </Routes>
      
      
      </BrowserRouter>
     
    </div>
  )
}

export default App 