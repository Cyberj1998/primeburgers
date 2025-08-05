import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Burger1 from '../assets/Hero/burgercombo.png'


import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from './config'


const dotVariants = {
  initial: { y: 0 },
  animate: { 
    y: -10,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);

  /*
  #9fffcb
  #25a18e
  #7ae582
  
  #00a5cf
  */ 
  return (
    <div className='obsolute-container h-[100vh] w-full flex items-center relative bg-[#312f2f]'>
      <div className='ml-[50px] mt-10 h-fit absolute z-10'>
        <motion.div {...headContainerAnimation}>
          <p className='text-[#898989] font-bold text-[20px]'>eat better not worst</p>
          <h1 className='text-[55px] font-black text-white font-sans'>Prime <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent'>Burgers</span> <br /> with the best<div className="loader w-fit">
          <div className="words flex flex-col justify-start items-start">
            <span className="word text-[55px] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans">Ingredients</span>
            <span className="word text-[55px] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans">Flavor</span>
            <span className="word text-[55px] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans">Meat</span>
            <span className="word text-[55px] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans">Bread</span>
            <span className="word text-[55px] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans">Price</span>
          </div>
      </div></h1>
        </motion.div>
        <motion.div {...headTextAnimation}>
          <p className='text-[15px] text-[#898989] md:w-[50%] w-[80%] mt-[5px]'>¡Bienvenido a Prime Burgers! Disfruta de las mejores hamburguesas de la ciudad,🍔 jugosas y repletas de sabor. Desde clásicas hasta creaciones innovadoras,</p>
        </motion.div>
        <motion.div {...headContentAnimation}>
          <button className='text-black bg-[#7ae582] mt-5 p-[10px] rounded-[20px] cursor-pointer font-sans font-semibold'><Link to='/shop'>Pide la tuya!</Link></button>
          <button className='text-white bg-transparent border mt-5 ml-5 border-[#7ae582] p-[10px] rounded-[20px] cursor-pointer font-sans font-semibold'><Link to='/shop'>Ordena ya!</Link></button>
        </motion.div>
      </div>
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: -25 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className='hero-image md:ml-[45%] ml-[20%] z-[2] max-md:h-[300px] h-[400px]'
        src={Burger1}
        alt='Burger image'
      />
      <div className='absolute w-full h-full grid grid-cols-10 gap-0' style={{ zIndex: 1 }}>
        {[...Array(100).keys()].map((index) => (
          <motion.div
            key={index}
            animate={index === activeIndex ? 'animate' : 'initial'}
            variants={dotVariants}
            className='bg-[#000000] w-[2.5px] h-[2.5px] rounded-full'
          />
        ))}
      </div>
    </div>
  )
}


export default Home