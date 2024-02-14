import React, { useState } from "react";
import logo from './card.svg'

const Header = (props) => {
    const [cartCouter, setCouter] = useState({
        couter: 0
    })
    function handlerCart() {

    }
    return (
        <>
            <header className="flex bg-purple-500 justify-between py-3 ">
                <span className=" font-bold mx-16 ">Chai Shop</span>
                <div className=" bg-cyan-800 flex mr-16 rounded-xl px-4 py-2" onClick={handlerCart}>
                    <img className="w-5 h-5 mr-1" src={logo}></img>
                    <span className=" text-white font-bold ">Your Cart</span>
                    <span className='ml-4'>{cartCouter.couter}</span>
                </div>
            </header>
            <div>
                <img src="./banner.jpg" alt="something went wrong" className="w-80 h-80" ></img>
            </div>
        </>
    )
}
export default Header;