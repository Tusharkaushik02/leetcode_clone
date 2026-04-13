import React from 'react'
import { Routes, Route } from "react-router";
import Login from './pages/login';
import { BrowserRouter } from 'react-router-dom'
import Landing from './pages/landing';
import Register from './pages/Register';
import Problemlist from './pages/pagelist';
import ProblemPage from './pages/problemPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/problemlist' element={<Problemlist />} />
        <Route path='/problemlist/:id' element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App