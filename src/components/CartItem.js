import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch()

  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.error("Item Removed")
  }

  return (

    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-8 border-b-4 border-gray-300 ">

        <div>
          <img src={item.image}
           className="w-[270px] mb-5"
          ></img>
        </div>

        <div className="flex flex-col justify-center items-start gap-y-3 mb-5">
          <h1 className="font-semibold">{item.title}</h1>
          <h1 className="text-[13px] text-gray-700">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>

          <div className="flex justify-between items-center w-full">
            <p className="text-green-700 font-semibold">{item.price}</p>
            <div onClick={removeFromCart} className="bg-red-200 p-2 rounded-full hover:cursor-pointer text-red">     
              <MdDelete color="red" size="13" />
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default CartItem