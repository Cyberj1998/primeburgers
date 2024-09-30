import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

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

const URL = 'https://burgersapi.onrender.com/burgers'

const shop = ({burgersData, setBurgersData}) => {

  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchData = () => {
    fetch(URL).then(res=>res.json()).then(data=>{
      setBurgersData(data)
      console.log(data)
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    fetchData()

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='flex justify-center items-center bg-[#efefef] h-[100vh] w-full'>
      <div className='border border-[#5f5f5f] h-[70%] w-[70%]  backdrop-filter backdrop-blur-[1px] rounded-[10px] flex flex-wrap justify-center z-[2] overflow-scroll'>
      {
        burgersData.length === 0 ? (
          <h1 className='text-green-600'>Loading...</h1>
        )
        : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className="flex flex-wrap">
            {burgersData.map((burger, index) => (
              <motion.div key={burger.key} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="m-2">
                <ProductCard data={burger} />
              </motion.div>
          ))}
          </motion.div>
        )
      }

      </div>
      <div className='absolute w-full h-full grid grid-cols-10 gap-0' style={{ zIndex: 1 }}>
        {[...Array(100).keys()].map((index) => (
          <motion.div
            key={index}
            animate={index === activeIndex ? 'animate' : 'initial'}
            variants={dotVariants}
            className='bg-[#919191] w-[2.5px] h-[2.5px] rounded-full'
          />
        ))}
      </div>
    </div>
  )
}

export default shop
