import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../assets/background/background_white.png'

const FAQ = () => {

   /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 
  return (
    <div className='h-[350px] w-full flex justify-center items-center bg-cover bg-center' style={{backgroundImage: `url(${Background})`}}>
      <div className='panel_faq bg-transparent border border-[#5f5f5f] backdrop-filter backdrop-blur-sm h-[90%] w-[70%] rounded-[10px] flex flex-col justify-evenly items-center'>
        <p>&#x1F914;</p>
        <h1 className='font-sans font-semibold text-[30px] text-[#5f5f5f] text-center'>Si deseas hacer alguna pregunta</h1>
        <p className='text-center text-[15px]'>puedes contactarnos usando este número <br />+56 85457595<br /> o completando el formulario de contacto</p>
        <button className='bg-[#7ae582] p-[5px] rounded-[10px] font-sans font-semibold text-[#5f5f5f]'><Link to='/email'>Email</Link></button>
      </div>
    </div>
  )
}

export default FAQ
