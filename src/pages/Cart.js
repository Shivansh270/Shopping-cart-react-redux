import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cart} = useSelector((state) => (state))
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => { 
    setTotalAmount( cart.reduce((acc,curr) => acc + curr.price, 0) )
    }, [cart])
  
  return (
    <div>
      {
        cart.length > 0 ? ( 
          <div> 
            <div>{
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              } )
            }
            </div>


            <div>
              <div>
                <div>your cart</div>
                <div>summary</div>
                <p>
                  total itwems: {cart.length}
                </p>
              </div>

              <div>
                <p>total amount: ${totalAmount}</p>
                <button>
                  checkout
                </button>
              </div>

            </div>


          </div>
        ) : (

          <div>
            <h1>cart is empty</h1>
            <Link to="/">
              <button>
                shop now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart