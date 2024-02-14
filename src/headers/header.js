import React, { useState } from "react";

import banner from '../assets/banner.jpg'
import Cart from '../cart/cart'

const Header = ({ cartItemCounter }) => {
    function handlerCart() {

    }
    return (
        <>
            <header className="flex bg-purple-500 justify-between py-2 items-center">
                <span className=" font-bold mx-16 ">Chai Shop</span>
                <Cart />
            </header>
            <div className="flex justify-center items-center">
                <img src={banner} alt="something went wrong" className="w-full h-96 object-cover" ></img>
            </div>
        </>
    )
}
export default Header;