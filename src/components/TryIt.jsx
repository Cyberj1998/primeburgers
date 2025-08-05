import React from 'react'
import Logo from '../assets/Burgers/logo/Burger_Logo.png'

const TryIt = () => {

  /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 
  return (
    <div className='h-[200px] w-full flex flex-col justify-center items-center bg-[#494646]'>
      <img src={Logo} alt="logo" className='h-[80px]' />
      <h1 className='font-sans font-semibold text-[20px]'>No dudes <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-extrabold'>mas!</span></h1>
      <p className='w-[70%] md:text-[15px] text-[12px] text-center text-[#a2a2a2]'>En Prime Burgers, utilizamos ingredientes de la más alta calidad para garantizar que cada hamburguesa sea un verdadero manjar.</p>
    </div>
  )
}

export default TryIt
