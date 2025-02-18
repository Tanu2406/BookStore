import React from 'react'

import './App.css'
import Home from './components/Home/Home'
import Courses from './components/Courses/courses'
import{ BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp'
import About from './components/About'
import ContactUs from './components/Contact/ContactUs'
import AboutUs from './components/About/AboutUs'


function App() {
 

  return (
    <>
   {/* <Home/>
   <Course/> */}
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Courses/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
