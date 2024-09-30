import React from 'react'
import { Link } from 'react-router-dom'

const Divider = () => {


  /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 
  return (
    <div className='w-full h-[200px] flex flex-col justify-center items-center bg-[#e3e3e3]'>
      <p>&#x1F60B;</p>
      <h1 className='font-sans font-semibold text-[20px] text-[#5f5f5f]'>Te <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-extrabold'>Esperamos</span>!</h1>
      <p className='w-[70%] md:text-[15px] text-[12px] text-center'>Te esperamos para que pruebes nuestras exquisitas creaciones! ¡No te arrepentirás!</p>
      <button className='bg-[#7ae582] rounded-[10px] p-[5px] mt-[20px] font-sans font-semibold text-[#5f5f5f]'><Link to='/shop'>Quiero Probar</Link></button>
    </div>
  )
}

export default Divider
