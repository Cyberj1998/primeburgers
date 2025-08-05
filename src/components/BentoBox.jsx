import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import BurgerMeal from './BurgerMeal'
import RightArrow from '../assets/icons/right.png'
import BentoImage1 from '../assets/bento-icon-1.png'
import BentoImage2 from '../assets/bento-icon-2.png'
import BentoImage3 from '../assets/bento-icon-3.png'

const BentoBox = () => {

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

    const [burgerModelScale, burgerModelPosition, burgerModelrotation] = adjustBurgerModelForScreen()
    
  return (
    <div className='h-[100vh] w-full flex justify-center items-center p-3 bg-[#312f2f]'>
      <div className='grid grid-cols-10 grid-rows-4 gap-5 h-full w-full'>
        <div className='col-span-5 row-span-3 bg-[#383838] rounded-2xl flex justify-center items-center'>
            <Canvas 
                className='w-full h-full bg-transparent flex justify-center items-center'
                camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense>
                <BurgerMeal
                  position={burgerModelPosition}
                  scale={burgerModelScale}
                  rotation={burgerModelrotation}
                />
              </Suspense>
            </Canvas>
        </div>
        <div className='col-span-3 row-span-3 bg-[#383838] text-center rounded-2xl flex flex-col justify-center items-center max-sm:col-span-5'>
          <img src={BentoImage1} className='h-[250px] w-[250px]' alt="bento image" />
          <p className='text-[#a2a2a2] w-[100%] relative text-[15px] p-2'>Disfruta las mejores hamburguesas artesanales, hechas con ingredientes frescos y locales. Sabor único, atención excepcional, ambiente familiar y precios accesibles para todos.</p>
        </div>
        <div className='col-span-2 row-span-2 bg-[#383838] rounded-2xl flex flex-col justify-center items-center max-sm:hidden'>
          <img src={BentoImage2} className='h-[150px] w-[150px]' alt="bento image" />
          <p className='text-[#a2a2a2] w-[100%] relative text-[15px] p-2'>Disfruta de una hamburguesa con sabor único y delicioso. </p>
        </div>
        <div className='col-span-2 row-span-1 bg-[#383838] rounded-2xl flex flex-col text-center justify-center items-center max-sm:hidden'>
          <p className='text-[#a2a2a2] w-[100%] relative text-[15px] p-2'>Los mejores ingredientes para la mejor hamburguesa</p>
          <img 
            className='h-[50px]'
            src={RightArrow}
            alt="arrow" 
          />
        </div>
        <div className='col-span-5 row-span-1 bg-[#383838] rounded-2xl flex flex-row justify-center items-center'>
          <img src={BentoImage3} className='h-[200px] w-[200px]' alt="bento image" />
          <p className='text-[#a2a2a2] w-[100%] relative text-[15px] p-2 max-md:hidden'>Disfruta nuestras hamburguesas artesanales con ingredientes frescos y un sabor auténtico, único siempre.</p>
        </div>
        <div className='col-span-5 row-span-1 bg-[#383838] rounded-2xl flex justify-center items-center'>
         <p className='text-[#a2a2a2] w-[100%] relative text-[15px] p-2 max-md:text-[12px]'>Nuestras hamburguesas artesanales combinan calidad y sabor excepcional. Cada bocado refleja pasión y compromiso con productos frescos. ¡Ven a probar!</p>
        </div>
      </div>
    </div>
  )
}

export default BentoBox
