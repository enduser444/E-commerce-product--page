import image1 from '../assets/image-product-1-thumbnail.jpg'
import deleteImage from '../assets/icon-delete.svg';
import { useEffect, useState } from 'react';

function CartState({state , state2 , count , cartClose}) {
  let [result , setResult] = useState(0);
   useEffect( () => {
     setResult(125*count)
   } , [count])

   if(state){
      if(state2){
        return(
        <div className=" bg-white z-[9999] w-full h-full items-center justify-center border-2 ">
            <h2 className="p-1 w-full h-[20%] text-3xl">Cart</h2>
            <div className=" w-full h-[80%] border-t border-black border-opacity-20 mt-2 flex justify-center items-center] ">
                <h2 className="text-gray-500 mt-6 text-2xl">Your cart is empty</h2>
            </div>
        </div>)
      }else{
        return(

          <div className=" bg-white z-[9999] w-full h-full items-center justify-center border-2 ">
            <h2 className="p-1 w-full h-[20%] text-3xl">Cart</h2>
            <div className="w-full h-full flex flex-col gap-4 px-9 pt-10 border-t-2 border-black border-opacity-20">
              <div className="flex flex-row gap-2 items-center justify-center">
                <img src={image1} className='w-12 h-12' />
                <div className='flex flex-col'>
                  <p className='text-gray-600'>Fall Limited Edition Sneakers</p>
                  <h2 className='text-gray-600 flex flex-row gap-1'>$125 x {count} <h1 className='font-bold text-black'>${result}</h1> </h2>
                </div>
                <img src= {deleteImage} onClick={cartClose} className='w-3 h-5'></img>
              </div>
              <button className='bg-[#ff7d1b] w-full h-[50px] items-center justify-center rounded-md'>Checkout</button>
            </div>
          </div>

          
        )
      }
   }
}

export default CartState;