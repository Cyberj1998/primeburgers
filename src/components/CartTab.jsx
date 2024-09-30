import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import CartProductCard from './CartProductCard'
import emailjs from '@emailjs/browser'
emailjs.init('Aq1MKkHaXC9WkHO5P');



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


function CartTab() {

  const [emailSent, setEmailSent] = useState(false)

  const [modal,setModal]= useState(false)

  const [sending,setSending] = useState(false)

  const [address,setAddress]=useState('')
  
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const carts = useSelector(store => store.cart.items)


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);

  const totalAmount = carts.map(product => product.price * product.quantity)
  .reduce((acc, curr) => acc + curr, 0);

  /*
  service_vwsqpxr
  template_61jrj8h
  Jay 
  Prime Burgers
  carts
  totalAmount.toFixed(2)
  Order
  */

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }


  const sendEmail = () => {
    setSending(true)
    if (!emailSent) {
      const cartContent = carts.map((item, index) => {
        return `${index + 1}. ${item.name} - ${item.quantity} - $${item.price}`;
      }).join('\n');

      emailjs.send('service_vwsqpxr', 'template_61jrj8h', {
        subject: 'Order Details',
        message: `${cartContent} 
        Total: ${totalAmount.toFixed(2)}
        Direccion: ${address}`
      }, 'Aq1MKkHaXC9WkHO5P')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setEmailSent(true);
        alert('Compra exitosa')
      }, (error) => {
        console.error('Email send failed:', error);
      });
    }
  }


  const handleModal = () => {
    setSending(false)
    setModal(false)
  }


  return (
    <div className='flex flex-col justify-center items-center bg-[#efefef] h-[100vh] w-full'>
      <div className='border border-[#5f5f5f] h-[70%] w-[70%]  backdrop-filter backdrop-blur-[1px] rounded-[10px] flex flex-wrap justify-center z-[2] overflow-scroll'>
        {
            carts.map((item, key) =>
                <CartProductCard data={item} key={key} />
            )
        }
      </div>

      <div className='flex flex-row justify-between items-center border border-[#5f5f5f] h-[50px] w-[70%] rounded-[10px] m-[20px]' >
        <h1 className='font-sans font-semibold text-[#5f5f5f] m-[10px]'>
          {`Total:${totalAmount.toFixed(2)}`}
        </h1>
        <button className='bg-[#7ae582] p-[5px] rounded-[10px] m-[10px] font-sans font-semibold cursor-pointer z-30' onClick={()=>setModal(true)}>Check Out</button>
      </div>

      {
        modal ? 
        <div className='modal bg-transparent backdrop-filter backdrop-blur-[10px] border border-[#5f5f5f] h-[95%] w-[95%] rounded-[10px] flex flex-col justify-between items-center absolute z-40'>
          <div className='h-[50px] w-full flex justify-end'>
            <button className='w-[50px] h-[50px] bg-red-500 rounded-[10px]' onClick={()=>handleModal()}>X</button>
          </div>
          <input type="text" className='h-[70%] w-[70%]' placeholder='escriba su direccion' onChange={handleAddressChange} />
          <button className='bg-[#7ae582] p-[5px] rounded-[10px] m-[10px] w-[150px] border border-[#fff] font-sans font-semibold cursor-pointer z-30' onClick={()=>sendEmail()}>{sending === false ? 'Comprar' : '...'}</button>
        </div> :
        ''
      }

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

export default CartTab
