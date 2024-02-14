import React from 'react'
import logo from '../assets/cartlogo.svg'




const Cart = ({cartItemCounter}) => {
    function handlerCart(){

    }
    return (
        <div className=" bg-cyan-800 flex mr-16 rounded-xl px-4 py-3" onClick={handlerCart}>
            <img className="w-5 h-5 mr-1" src={logo}></img>
            <span className=" text-white font-bold ">Your Cart</span>
            <span className='ml-4 text-white'>{0}</span>
        </div>

    )
}


export default Cart;