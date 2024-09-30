import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import BurgerMeal from './BurgerMeal'
import Logo from '../assets/Burgers/logo/Burger_Logo.png'
import Background from '../assets/background/background_white.png'


const Hero = () => {


  const adjustBurgerModelForScreen = () => {
    let screenScale = null
    let screenPosition = [0, -10, -25]
    let rotation = [0, 0.5, 0]
    
    if(window.innerWidth < 768){
      screenScale = [55, 55, 55]
    }
    else{
      screenScale = [55, 55, 55]
    }

    return [screenScale, screenPosition, rotation]
  }


  const [chairModelScale, chairModelPosition, chairModelrotation] = adjustBurgerModelForScreen()


  /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 

  return (
    <div className='md:h-[500px] h-[500px] w-full flex md:flex-row flex-col justify-center items-center'>
        <div className='3d-model md:h-[100%] h-[50%] md:w-[50%] w-[100%]'>
            <Canvas 
            className='w-full h-full bg-transparent flex justify-center items-center'
            camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense>
                <BurgerMeal
                  position={chairModelPosition}
                  scale={chairModelScale}
                  rotation={chairModelrotation}
                />
              </Suspense>
            </Canvas>
        </div>
        <div className='right-info md:h-[100%] h-[50%] md:w-[50%] w-[100%] bg-cover bg-center' style={{backgroundImage: `url(${Background})`}}>
          <div className='top_section md:h-[30%] h-[25%] w-full'>
            <h1 className='text-[#5f5f5f] font-sans font-semibold md:text-[40px] text-[30px] ml-[10px]'>Razones para <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-extrabold'>Elegirnos</span>!</h1>
          </div>
          <div className='bottom_section flex flex-col justify-evenly backdrop-filter backdrop-blur-sm border border-[#5f5f5f] rounded-[10px] w-[90%] ml-[10px] md:h-[60%] h-fit'>
            <div className='flex flex-row m-[5px]'>
              <img src={Logo} className='md:h-[50px] h-[30px]' alt="icon" />
              <div className='flex flex-col'>
                <h1 className='font-sans font-semibold md:text-[15px] text-[12px]'>Calidad</h1>
                <p className='md:text-[12px] text-[10px] text-[#3d3d3d]'>utilizamos ingredientes de la más alta calidad</p>
              </div>
            </div>

            <div className='flex flex-row m-[5px]'>
              <img src={Logo} className='md:h-[50px] h-[30px]' alt="icon" />
              <div className='flex flex-col'>
                <h1 className='font-sans font-semibold md:text-[15px] text-[12px]'>Variedad</h1>
                <p className='md:text-[12px] text-[10px] text-[#3d3d3d]'>Nuestra amplia variedad de hamburguesas ofrece opciones para todos los gustos</p>
              </div>
            </div>

            <div className='flex flex-row m-[5px]'>
              <img src={Logo} className='md:h-[50px] h-[30px]' alt="icon" />
              <div className='flex flex-col'>
                <h1 className='font-sans font-semibold md:text-[15px] text-[12px]'>Experiencia</h1>
                <p className='md:text-[12px] text-[10px] text-[#3d3d3d]'>Cada bocado en Prime Burgers es una experiencia deliciosa e inolvidable que te hará regresar por más</p>
              </div>
            </div>
          </div>
        </div>
  </div>
  )
}




export default Hero