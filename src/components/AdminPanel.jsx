import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vbjtxjprqjeydsnyrxgp.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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


const AdminPanel = () => {

  const [activeIndex, setActiveIndex] = useState(-1);
  const[searchValue,setSearchValue]=useState('')
  const[searchValuePassword,setSearchValuePassword]=useState('')
  const[usersData,setUsersData]=useState([])
  const[isUserSignUp,setIsUserSignUp]=useState(false)
  const[errorUser,setErrorUser]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const authentication = () => {
    //usersData.includes(searchValue)
    usersData.map((user, index)=>{
      user.email === searchValue && user.password === searchValuePassword ?  (setIsUserSignUp(true)) : (setErrorUser(true))
    })
  }

  const handleLogIn = async () => {
    
    let { data , error } = await supabase
    .from('users')
    .select('*') //Fetch all the users from the table users

    // here whe are gonna make sure that the user exist
    if (error) {
      console.log(error);
    } else {
      setUsersData(data); // store the data from the table in this variable
      console.log(usersData)
    }

    //make the comparation to see if the user exist
    authentication()
  }


  const handleSignUp = () => {
    console.log('estamos manejando el log in')
  }

  useEffect(()=>{
    const interval = setInterval(() => {
        setActiveIndex(Math.floor(Math.random() * 100))
    }, 300)

    return () => clearInterval(interval)
  },[])

  return (
    <div className='border-[2px] border-red-600 flex justify-center items-center h-[100vh] w-full'>
      {
        isUserSignUp ? (
          <>
            <div>
              this is the crud admin panell
            </div>
          </>
        )
        : (
          <>
            <form 
              onSubmit={handleSubmit}
              className='border border-[#5f5f5f] h-[80vh] max-sm:h-fit w-[50%] max-sm:w-[90%] mt-[50px] max-sm:mt-[-50px] backdrop-filter backdrop-blur-[1px] z-[2] rounded-[10px] flex flex-col justify-evenly items-start'
            >
              <h3 className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans font-semibold text-[30px] max-sm:text-[20px] ml-5'>
                Admin Panel Authentication
              </h3>
              <div className='flex flex-col w-full'>
                <label 
                  className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'
                >
                  Email
                </label>
                <input
                  className='rounded w-[80%] ml-5'
                  type="text" 
                  placeholder='admin@gmail.com' 
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <p className={clsx('error_message text-red-500 ml-5 text-[15px]', !errorUser ? 'opacity-0' : '')}>
                  user not found
                </p>
              </div>
              <div className='flex flex-col w-full'>
                <label 
                  className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'
                >
                  Password
                </label>
                <input
                  className='rounded w-[80%] ml-5' 
                  type="text" 
                  placeholder='admin'
                  onChange={(e) => setSearchValuePassword(e.target.value)} 
                />
                <p className={clsx('error_message text-red-500 ml-5 text-[15px]', !errorUser ? 'opacity-0' : '')}>
                  incorrect password or user
                </p>
              </div>
              <div className='button_container w-full flex flex-row justify-center'>
                <button
                  onClick={()=>handleSignUp()} 
                  className='font-sans font-semibold p-2 md:text-[15px] text-[8px] cursor-pointer rounded-tl-[10px] rounded-bl-[10px] bg-gradient-to-r from-[#25a18e] via-[#25a18e] to-[#7ae582]'
                >
                  Sign Up
                </button>
                <button
                  onClick={()=>handleLogIn()} 
                  className='font-sans font-semibold p-2 md:text-[15px] text-[8px] cursor-pointer rounded-tr-[10px] rounded-br-[10px] bg-[#7ae582]'
                >
                  Log In
                </button>
              </div>
            </form>
          </>
        )
      }
      
      <div className='absolute w-full pointer-events-none h-full grid grid-cols-10 gap-0' style={{ zIndex: 1 }}>
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


export default AdminPanel
