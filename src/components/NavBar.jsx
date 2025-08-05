import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Burgers/logo/Burger_Logo.png'
import Instagram from '../assets/icons/instagram.svg'
import Telegram from '../assets/icons/telegram.svg'
import Cart from '../assets/icons/cart.png'
import BurgerMenu from '../assets/icons/burgerMenu.png'
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

  const[burgerMenu,setBurgerMenu]=useState(false)

  const handleMovileMenu = () => {
    setBurgerMenu(prev => !prev)
  }


  return (
    <>
      <div className='h-[50px] w-full flex flex-row max-md:justify-between justify-around items-center fixed backdrop-filter backdrop-blur-xl z-20'>
        <div className='flex flex-row justify-center items-center cursor-pointer max-md:ml-5'>
          <img src={Logo} className='rounded-full h-[50px]' />
          <p className='font-bold text-[15px] text-[#fff]'>Prime Burgers</p>
        </div>
        <div className='flex flex-row justify-center items-center h-fit'>
          <img
            className='max-md:flex hidden cursor-pointer h-[30px]'
            onClick={()=>handleMovileMenu()} 
            src={BurgerMenu} 
            alt="burgerMenu" 
          />
          <Link to='/cart' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer hidden max-md:flex flex-row'>
            <img src={Cart} className='md:h-[30px] h-[20px]' alt="cart" />
            <span className='font-sans font-semibold text-green-500 text-[20px]'>
              {totalQuantity}
            </span>
          </Link>
        </div>
        <ul className='flex flex-row max-md:hidden'>
          <Link to='/' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer text-[#898989]'>Home</Link>
          <Link to='/shop' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer text-[#898989]'>Burgers</Link>
          <li className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer text-[#898989]' onClick={handleScroll}>Eligenos</li>
          <Link to='/email' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer text-[#898989]'>Contact</Link>
          <Link to='/cart' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer flex flex-row'><img src={Cart} className='md:h-[30px] h-[20px]' alt="cart" />
            <span className='font-sans font-semibold text-green-500 text-[25px] relative'>
              {totalQuantity}
            </span>
          </Link>
        </ul>
        <div className='h-[30px] w-[80px] rounded-[50px] flex md:flex-row justify-center flex-col max-md:hidden items-center bg-[#686868]'>
          <img src={Instagram} className='m-[2px] cursor-pointer md:h-[25px] h-[15px]' />
          <img src={Telegram} className='m-[2px] cursor-pointer md:h-[30px] h-[20px]' />
        </div>
      </div>
      <div className={`slide-panel w-full bg-[#212121] max-md:flex justify-center hidden top-0 left-0 transition-all ${burgerMenu ? 'h-[350px]' : 'h-0'}`}>
        <ul className='flex flex-col justify-center items-center'>
          <Link to='/' className={`font-sans font-semibold p-5 md:text-[15px] text-[20px] cursor-pointer text-[#898989] ${burgerMenu ? '' : 'hidden'} `}>Home</Link>
          <Link to='/shop' className={`font-sans font-semibold p-5 md:text-[15px] text-[20px] cursor-pointer text-[#898989]  ${burgerMenu ? '' : 'hidden'} `}>Burgers</Link>
          <li className={`font-sans font-semibold p-5 md:text-[15px] text-[20px] cursor-pointer text-[#898989] ${burgerMenu ? '' : 'hidden'}  `} onClick={handleScroll}>Eligenos</li>
          <Link to='/email' className={`font-sans font-semibold p-5 md:text-[15px] text-[20px] cursor-pointer text-[#898989] ${burgerMenu ? '' : 'hidden'} `}>Contact</Link>
        </ul>
      </div>
    </>
  )
}

export default NavBar



//<Link to='/admin' className='font-sans font-semibold p-5 md:text-[15px] text-[8px] cursor-pointer'>Admin</Link>