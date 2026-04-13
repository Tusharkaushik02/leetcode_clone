import React from 'react'
import { Routes, Route } from "react-router";
import Login from './pages/login';
import { BrowserRouter } from 'react-router-dom'
import Landing from './pages/landing';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App