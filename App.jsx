import ImageChanger from "./Components/ImageChanger";
import logoIcon from "./assets/logo.svg";
import cartIcon from "./assets/icon-cart.svg";
import profileImg from "./assets/image-avatar.png";
import menuIcon from "./assets/icon-menu.svg";
import imageThumnnail1 from "./assets/image-product-1-thumbnail.jpg";
import imageThumnnail2 from "./assets/image-product-2-thumbnail.jpg";
import imageThumnnail3 from "./assets/image-product-3-thumbnail.jpg";
import imageThumnnail4 from "./assets/image-product-4-thumbnail.jpg";
import previousButton from "./assets/icon-previous.svg";
import nextButton from "./assets/icon-next.svg";
import CartState from "./Components/CartState";
import plusButton from './assets/icon-plus.svg';
import minusButton from './assets/icon-minus.svg';
import { useState } from "react";
import MenuState from "./Components/MenuState";


function App() {

  let[ImgChng , setImgChng] = useState(1);
  let[cartState, setCartState] = useState(false);
  let[cartState2, setCartState2] = useState(true);
  let[count , setCount] = useState(1);
  let[menuState , setMenuState] = useState(false);

   let menuClose = () => {
    setMenuState(false);
   }

   let cartClose = () => {
      setCartState2(true);
      setCount(1)
   }
   
   
  return (
    <div className=" pl-0 md:pl-7 lg:pl-7 xl:pl-7 pt-2 w-full h-full">
      <div className="grid grid-cols-12 gap-1">
        {/* ------------------------------------------------HEADER SECTION START-------------------------------------------- */}
        <div className="grid grid-cols-12 p-4  mb-2  col-span-12 gap-1 border-b-2 border-black border-opacity-15">
          <div className="col-span-1  md:hidden lg:hidden xl:hidden">
            <img src= {menuIcon} onClick= {() => {setMenuState(true)}} className="w-6 h-6"></img>
          </div>
          <div className="col-span-8  md:col-span-3 lg:col-span-2 xl:col-span-2">
            <img src= {logoIcon} className="w-36 h-5 ml-3 "></img>
          </div>
          <div className="hidden sm:block sm:col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-7 ">
            <div className="flex flex-row justify-start gap-3 items-center p-1">
              <h3 className="hover:text-blue-500 hover:font-bold hover:cursor-pointer transition-all">Collection</h3>
              <h3 className="hover:text-blue-500 hover:font-bold hover:cursor-pointer transition-all">Menu</h3>
              <h3 className="hover:text-blue-500 hover:font-bold hover:cursor-pointer transition-all">Men</h3>
              <h3 className="hover:text-blue-500 hover:font-bold hover:cursor-pointer transition-all">About</h3>
              <h3 className="hover:text-blue-500 hover:font-bold hover:cursor-pointer transition-all">Contect</h3>
            </div>
          </div>
          <div className="col-span-3 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <div className="flex flex-row justify-end p-1 items-center gap-3">
              <div className="relative w-auto h-auto">
                <img src = {cartIcon} onClick={() => {setCartState(!cartState)}} className="w-4 h-4 md:w-6 md:h-6 xl:w-6 xl:h-6 lg:w-6 lg:h-6 "></img>
                {!cartState2 && (<div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>)}
              </div>
              <img src = {profileImg} className="w-6 h-6 md:w-10 md:h-10 xl:w-10 xl:h-10 lg:w-10 lg:h-10"></img>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------HEADER SECTION END-------------------------------------------- */}


        {/* ------------------------------------------------CONTENT DIV 1 START-------------------------------------------- */}
        <div className="p-0 md:p-2 xl:p-4 lg:p-4  mb-1  col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6">
          <div className="w-full h-[300px] md:h-[612px] xl:h-[612px] lg:h-[612px] flex items-start justify-normal md:items-center md:justify-center  xl:items-center  xl:justify-center lg:items-center lg:justify-center px-0 md:px-7 xl:px-24 lg:px-24 rounded-none md:rounded-[20px] xl:rounded-[30px] lg:rounded-[30px] relative ">
            <ImageChanger imageChanger = {ImgChng} />
            <div className="w-7 h-7 rounded-full bg-white p-0 flex justify-center items-center md:hidden xl:hidden lg:hidden top-28  left-1 absolute z-[999]">
              <img src={previousButton} onClick={() => {ImgChng>1 && (setImgChng(ImgChng-1))}} className="w-3 h-3 "></img>
            </div>
            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center md:hidden xl:hidden lg:hidden absolute z-[999] top-28 left-[21rem] ">
              <img src={nextButton} onClick= {() => {ImgChng<4 && (setImgChng(ImgChng+1))}} className="  w-3 h-3"></img>
            </div>
            
          </div>
          <div className="hidden sm:block">
            <div className="w-full h-[100px] items-center justify-between px-24 flex flex-row">
               <div className="w-[20%] h-full">
                <img src={imageThumnnail1} onClick={() => {setImgChng(1)}} className="w-full h-full rounded-[15px]"  />
               </div>
               <div className="w-[20%] h-full">
                <img src={imageThumnnail2} onClick={() => {setImgChng(2)}} className="w-full h-full rounded-[15px]"  />
               </div>
               <div className="w-[20%] h-full">
                <img src={imageThumnnail3} onClick={() => {setImgChng(3)}} className="w-full h-full rounded-[15px]"  />
               </div>
               <div className="w-[20%] h-full">
                <img src={imageThumnnail4} onClick={() => {setImgChng(4)}} className="w-full h-full rounded-[15px]"  />
               </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------CONTENT DIV 1 END-------------------------------------------- */}


        {/* ------------------------------------------------CONTENT DIV 2 START-------------------------------------------- */}
        <div className="pl-3 pr-5 md:pl-10  lg:pl-10  xl:pl-10 pt-0 md:pt-14 lg:p-52 xl:p-52  mb-1  col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6 ">
          <div className="w-full h-auto pr-0 md:pr-36 lg:pr-32 xl:pr-32 ">
            <h2 className="text-1xl my-2">SNEAKER COMPANY</h2>
            <h1 className="text-4xl text-black mt-2">Fall Limited Edition</h1>
            <h1 className="text-4xl text-black">Sneakers</h1>
            <p className="text-1xl text-gray-600 my-4">These low profile sneakers are your perfect casual wear companion. Featuring a perfect durable rubber outer sole they'll withstand everything the weather can offer</p>
          </div>
          <div className="flex flex-row gap-2 my-2">
            <div className="p-1 text-black font-bold text-2xl">$125.00</div>
            <div className="text-white bg-black px-1 flex items-center justify-center rounded-md">50%</div>
          </div>
          <p className="line-through my-2">$250.00</p>
          <div className="grid grid-cols-12 pr-3  ">
            <div className="col-span-12 md:col-span-12 lg:col-span-4  xl:col-span-4  mr-2 h-[53px]">
              <div className="w-full h-[53px] flex flex-row justify-between items-center   ">
                <img src= {minusButton} onClick={() => {count > 1 && (setCount(count-1))}}  className="w-4 h-1" ></img>
                <div>{count}</div>
                <img src= {plusButton} onClick={() => {count < 20 && (setCount(count+1))}}  className="w-4 h-4" ></img>
              </div>
            </div>
            <button onClick={() => {setCartState2(false)}} className="flex flex-row col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 w-full h-[53px] md:w-full md:h-[53px] xl:w-[270px] xl:h-[53px] lg:w-[270px] lg:h-[53px] items-center justify-center bg-[#ff7d1b] text-black rounded-md gap-1"> <img src= {cartIcon} className="w-4 h-4"></img>Add to cart</button>
          </div>
        </div>
        {/* ------------------------------------------------CONTENT DIV 2 END-------------------------------------------- */}
        <div className="  w-full h-[300px] md:w-[362px] md:h-[241px] xl:w-[362px] xl:h-[241px] lg:w-[362px] lg:h-[241px] absolute top-[70px] left-0 md:top-16 md:left-[70%] xl:top-16 xl:left-[70%] lg:top-16 lg:left-[70%] border-y-black">
          <CartState state = {cartState} state2={cartState2} count={count} cartClose={cartClose} />
        </div>
      </div>
      <MenuState menuState={menuState} menuStateClose={menuClose} />
    </div>
  )

}

export default App
