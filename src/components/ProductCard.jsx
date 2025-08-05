import React from 'react'
import Cart from '../assets/icons/cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './store/cart'

const ProductCard = (props) => {

  /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 

  const carts = useSelector(store => store.cart.items)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      name: name,
      price: price,
      image: image,
      quantity: 1
    }))
    console.log(carts)
  }

  const {name, price, description, image, id } = props.data
  
  
  return (
    <div className='border border-[#5f5f5f] h-fit p-[8px] text-center w-[200px] rounded-[10px] m-5 flex flex-col justify-evenly items-center bg-[#494646]' id={id}>
        <h1 className='font-sans font-semibold text-white text-[20px]'>{name}</h1>
        <img src={image} alt="product image" className='h-[50%] w-[80%]' />
        <p className='text-white text-[20px]'>${price}</p>
        <p className='text-[#a2a2a2] font-sans text-[15px]'>{description}</p>
        <button className="font-sans font-semibold text-[13px] bg-[#7ae582] rounded-[5px] flex flex-row justify-center items-center z-10 w-fit h-[30px]" onClick={handleAddToCart}>Add To Cart <img id="cart" src={Cart} className="h-[12px] w-[12px] ml-[5px]" alt="cart" /></button>
    </div>
  )
}



export default ProductCard