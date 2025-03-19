import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './Footer'

function App() { 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

     
    </>
  )
}

export default App
