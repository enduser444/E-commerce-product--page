import closeIcon from '../assets/icon-close.svg';

function MenuState({menuState , menuStateClose}) {
    if(menuState){
        return (
            <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-25 md:hidden lg:hidden xl:hidden z-[9999]">
            <div className="w-[60%] h-full bg-white flex flex-col gap-4 p-2 pt-3">
                <img src= {closeIcon} onClick={menuStateClose}  className='w-7 h-7'></img>
                <h2 className='font-bold text-xl'>Collection</h2>
                <h2 className='font-bold text-xl'>Men</h2>
                <h2 className='font-bold text-xl'>Women</h2>
                <h2 className='font-bold text-xl'>About</h2>
                <h2 className='font-bold text-xl'>Contect</h2>
            </div>
        </div>
        )
    }
}

export default MenuState;