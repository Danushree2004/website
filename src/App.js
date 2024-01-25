import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/Contact"
import Contact from "./Pages/About"
import Layout from "./Pages/Layout"
//import  "./Pages/Layout.css"
//import React from 'react'
//import Service from './Pages/Service'
export default function App() {
  return(  
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout/>}> 
     <Route index element={<Home/>}/>
       <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
           </Route>
      </Routes>
      </BrowserRouter>
    )
  };
