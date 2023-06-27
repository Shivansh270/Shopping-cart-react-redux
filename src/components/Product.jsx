import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'

const Product = ({post}) => {

  const {cart} = useSelector((state) => (state));
  const dispatch = useDispatch()

  function addToCart(){
    dispatch(add(post))
    toast.success("item added to cart")
  }

  
  function removeFromCart(){
    dispatch(remove(post.id))
    toast.success("item removed from cart")

  }


  // const[selected, setSelected] = useState()
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image}></img>
      </div>

      <div>
        <p>{post.price}</p>
      </div>

        {
          cart.some((p) => p.id == p.id ) ? 
          (
            <button onClick={removeFromCart}>remove item</button>
          ) : (
            <button onClick={addToCart}>add item</button>
          )

        }
    
    </div>
  )
}

export default Product