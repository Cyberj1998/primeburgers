import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import PromoSection from './components/PromoSection'
import TryIt from './components/TryIt'
import Divider from './components/Divider'
import ResponsiveGallery from './components/ResponsiveGallery'
import Opinions from './components/Opinions'
import FAQ from './components/FAQ'
import Shop from './components/Shop'
import CartTab from './components/CartTab'
import EmailContact from './components/EmailContact'

function App() {

  const[burgersData,setBurgersData]=useState([])

  return (
    <div className='bg-[#efefef]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={
            <>
              <NavBar />
              <Home />
              <Carousel />
              <Hero />
              <TryIt />
              <PromoSection />
              <Divider />
              <ResponsiveGallery />
              <Opinions />
              <FAQ />
            </>
          }></Route>
          <Route path='/shop' element={
            <>
              <NavBar />
              <Shop burgersData={burgersData} setBurgersData={setBurgersData} />
            </>
          }>
          </Route>
          <Route path='/cart' element={
            <>
              <NavBar />
              <CartTab burgersData={burgersData} />
            </>
          }>
          </Route>
          <Route path='/email' element={
            <>
              <NavBar />
              <EmailContact />
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
