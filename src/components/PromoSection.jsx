import React from 'react'
import BackgroundImage from '../assets/Burgers/burger_wallpaper/burger_wallpaper_3.png'
import Background from '../assets/background/background_white.png'

const PromoSection = () => {
  return (
    <div className='h-[500px] w-full flex flex-row'>
        <div className='left_section h-full md:w-[30%] w-[45%] flex flex-col bg-center bg-cover' style={{backgroundImage: `url(${Background})`}}>
            <h1 className='font-sans font-semibold md:text-[30px] text-[20px] ml-[10px] text-[#5f5f5f]'>Ofertas</h1>
            <p className='md:text-[12px] text-[10px] ml-[10px]'>¡Disfruta de nuestras deliciosas hamburguesas en promoción! Descubre tres de nuestras hamburguesas estrella con descuento:</p>

            <h1 className='font-sans font-semibold text-[15] mt-[50px] ml-[10px]'>Clásica</h1>
            <p className='text-[12px] ml-[10px]'>La favorita de siempre, jugosa carne de res a la parrilla y queso cheddar</p>
            <p className='ml-[10px]'>
                ....................................................
            </p>
            <h1 className='font-sans font-semibold text-[15] ml-[10px]'>Picante</h1>
            <p className='text-[12px] ml-[10px]'>Para los que buscan un toque de picante, esta hamburguesa viene con sabrosas jalapeños</p>
            <p className='ml-[10px]'>
                ....................................................
            </p>
            <h1 className='font-sans font-semibold text-[15] ml-[10px]'>Vegana</h1>
            <p className='text-[12px] ml-[10px]'>Una opción para todos los gustos, esta hamburguesa vegana</p>
            <p className='ml-[10px]'>
                ....................................................
            </p>

            <div className='bg-transparent border border-[#5f5f5f] backdrop-filter backdrop-blur-sm ml-[10px] h-[100px] md:w-[200px] w-[150px] rounded-[10px] flex flex-col justify-center items-start'>
                <h1 className='ml-[10px] font-sans font-semibold text-[15px]'>Contactanos <br />con este numero</h1>
                <p className='ml-[10px]'>+45668731</p>
            </div>
        </div>
        <img src={BackgroundImage} className='right_section h-full md:w-[70%] w-[55%] w-contain'></img>
    </div>
  )
}

export default PromoSection
