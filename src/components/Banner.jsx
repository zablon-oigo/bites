import React from 'react'
import { GiFoodTruck } from "react-icons/gi";
import img from '../assets/biryani5.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFoodOutline } from "react-icons/io5";
function Banner() {
  return (
    <>
    <div className="flex items-center flex-col md:flex-row justify-between dark:bg-gray-900 dark:text-white">
        <div className="w-full md:w-1/2">
            <img src={img} alt="" className="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-xl" >
            <h2 className="text-4xl mb-4 font-semibold">Lorem ipsum dolor.</h2>
            <p className="mb-2 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum unde ipsam deleniti vero, deserunt sequi temporibus numquam consequuntur quo quae?</p>
            <p className="mb-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sed consequuntur perspiciatis fuga distinctio temporibus nisi eveniet dolore at fugit?</p>
            <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minima.</p>

            <div className="flex gap-4 mt-6 items-center">
            <IoFastFoodOutline  className='text-4xl h-20 w-20 px-4 py-2 shadow-sm rounded-full bg-violet-100 dark:bg-violet-400' />
            <GiFoodTruck className='text-4xl h-20 w-20 px-4 py-2 shadow-sm rounded-full bg-orange-100 dark:bg-orange-400'/>
            <GrSecure  className='text-4xl h-20 w-20 px-4 py-2 shadow-sm rounded-full bg-green-100 dark:bg-green-400'/>
            </div>
            <div className="">
                <button className="bg-primary rounded hover:scale-105  text-white px-6 py-3 mt-6">Order now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner