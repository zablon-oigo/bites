import React from 'react'
import logo from '../assets/salad.png'
import { GiShoppingCart } from "react-icons/gi";
import DarkModeButton from '../layout/DarkMode';

function Navbar() {
  return (
    <>
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container mx-auto">
           <div className="flex  items-center justify-between p-2">
            <div>
                <a href="" className="flex items-center gap-4">
                    <img src={logo} alt="" className="bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 rounded" />
                   <span className="md:text-4xl font-bold text-2xl">BountifulBowl</span>
                </a>
            </div>
            <ul className="hidden md:flex items-center gap-10  text-xl font-semibold ">
                <li className="inline-block py-4 px-4 hover:text-primary"><a href="">Home</a></li>
                <li className="inline-block py-4 px-4 hover:text-primary"><a href="">About</a></li>
                <li className="inline-block py-4 px-4 hover:text-primary"><a href="">Contact</a></li>
            </ul>
            <div className="">
                <DarkModeButton/>
            </div>
            <button className="hidden capitalize md:inline-flex items-center bg-gradient-to-r from-primary to to-secondary text-xl text-white px-6 py-3 rounded-md hover:scale-105 duration-300">

                order
                <GiShoppingCart size={30} className='drop-shadow-xl' />
            </button>
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar