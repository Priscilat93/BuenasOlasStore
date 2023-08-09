import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero";
import CardsProductos from "./components/Productos/CardsProductos"
import Suscribe from './components/Suscripcion/Suscribe';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CardsProductos/>
      <Suscribe/>
      <Footer/>
    </>
   
  )
}

export default App
