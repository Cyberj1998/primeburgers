import React from 'react'

const CartProductCard = (props) => {

  const {name, price, image, key, quantity } = props.data

  return (
    <div className='border border-[#5f5f5f] h-[250px] w-[200px] rounded-[10px] m-5 flex flex-col justify-evenly items-center bg-[#494646]' key={key}>
      <h1 className='font-sans font-semibold text-[15px] text-white'>{name}</h1>
      <img src={image} alt="product image" className='h-[50%] w-[80%]' />
      <p className='text-white font-semibold'>{price}</p>
      <div className='flex flex-row justify-center items-center w-fit'>
        <h1 className='text-[#a2a2a2] font-semibold'>Cantidad: {quantity}</h1>
      </div>
    </div>
  )
}


export default CartProductCard

