import React, { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
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
};

/*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 
const EmailContact = () => {
  
  const [activeIndex, setActiveIndex] = useState(-1);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      subject: subject,
      message: message
    };

    emailjs.send('service_vwsqpxr', 'template_61jrj8h', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset subject and message values after sending the email
        setSubject('');
        setMessage('');
        alert('Correo enviado con exito')
      }, (error) => {
        console.error('Email sending failed:', error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='flex justify-center items-center bg-[#efefef] h-[100vh] w-full'>
      <div className='border border-[#5f5f5f] h-[70%] w-[70%]  backdrop-filter backdrop-blur-[1px] rounded-[10px] flex flex-col justify-evenly z-[2]'>
        <h1 className='m-5 font-sans font-semibold text-[20px] text-[#5f5f5f]'>Envienos su <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-extrabold'>Opinion</span></h1>
        <input type="text" placeholder='Asunto' value={subject} onChange={(e) => setSubject(e.target.value)} className='m-5 bg-[#d8d8d8] rounded-[5px] placeholder:text-black w-[50%]' />
        <textarea name="Mensaje" placeholder='Mensaje' value={message} onChange={(e) => setMessage(e.target.value)} className='m-5 bg-[#d8d8d8] placeholder:text-black w-[80%] h-[70%]'></textarea>
        <button onClick={sendEmail} className='bg-[#7ae582] p-[5px] rounded-[10px] m-5  font-sans font-semibold  text-[#5f5f5f] w-[100px]'>Enviar</button>
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
  );
};

export default EmailContact;
