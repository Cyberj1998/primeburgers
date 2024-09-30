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
      productId: key,
      name: name,
      price: prize,
      image: image,
      quantity: 1
    }))
    console.log(carts)
  }

  const {name, prize, image, key } = props.data
  
  return (
    <div className='border border-[#5f5f5f] h-[250px] w-[200px] rounded-[10px] m-5 flex flex-col justify-evenly items-center bg-[#e4e4e4]' key={key}>
        <h1 className='font-sans font-semibold text-[#5f5f5f] text-[15px]'>{name}</h1>
        <img src={image} alt="product image" className='h-[50%] w-[80%]' />
        <p>{prize}</p>
        <button className="font-sans font-semibold text-[13px] bg-[#7ae582] rounded-[5px] flex flex-row justify-center items-center z-10 w-fit" onClick={handleAddToCart}>Add To Cart <img id="cart" src={Cart} className="h-[12px] w-[12px] ml-[5px]" alt="cart" /></button>
    </div>
  )
}



export default ProductCard