import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Burgers/logo/Burger_Logo.png'
import Instagram from '../assets/icons/instagram.svg'
import Telegram from '../assets/icons/telegram.svg'
import Cart from '../assets/icons/cart.png'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const [totalQuantity, setTotalQuantity] = useState(0)
  const carts = useSelector(store => store.cart.items)

  useEffect(() => {
    let total = 0
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)
  }, [carts])

  const handleScroll = () => {
    window.scrollTo({
      top: window.pageYOffset + 900,
      behavior: 'smooth'
    });
  }




  return (
    <div className='h-[65px] w-full flex flex-row mf:justify-around justify-around items-center fixed backdrop-filter backdrop-blur-xl border z-20'>
      <img src={Logo} className='rounded-full h-[50px]' />
      <ul className='flex flex-row'>
        <Link to='/' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'>Home</Link>
        <Link to='/shop' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'>Burgers</Link>
        <li className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer' onClick={handleScroll}>Eligenos</li>
        <Link to='/email' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'>Contact</Link>
        <Link to='/cart' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer flex flex-row'><img src={Cart} className='md:h-[30px] h-[20px]' alt="cart" /><span className='font-sans font-semibold'>{totalQuantity}</span></Link>
      </ul>
      <div className='h-[50px] w-[50px] flex md:flex-row flex-col items-center'>
        <img src={Instagram} className='m-[2px] cursor-pointer md:h-[25px] h-[15px]' />
        <img src={Telegram} className='m-[2px] cursor-pointer md:h-[30px] h-[20px]' />
      </div>
    </div>
  )
}

export default NavBar
