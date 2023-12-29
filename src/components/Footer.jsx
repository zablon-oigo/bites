import React from 'react'
import logo from '../assets/salad.png'
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Footer() {
  return (
    <div>
        <footer className=" dark:bg-gray-900 dark:text-white duration-200 py-10">
            <div className="flex justify-between flex-col md:flex-row gap-6 max-w-[1200px] mx-auto ">
                <div className="md:w-[50%] w-full">
                <a href="" className="flex items-center gap-4">
                    <img src={logo} alt="" className="bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 rounded" />
                   <span className="md:text-4xl font-bold text-2xl mb-6">BountifulBowl</span>
                </a>
                <div className="">
                    <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsam dignissimos eveniet explicabo beatae possimus nesciunt ut, illo voluptatibus dolores.</p>
                </div>
                <div className="mt-6 flex items-center gap-6">
                <FaFacebookF size={30} className='text-primary' />
                <FaTwitter size={30} className='text-primary'/>
                <IoLogoYoutube size={30} className='text-primary'/>
                </div>
                <div className="mt-6">
                    <p className="text-xl font-light">Copyright &copy; 2023 All rights reserved</p>
                </div>
                </div>
                <div className="md:w-[50%] w-full flex flex-col md:flex-row justify-around">
                       <div className="w-full mb-6">
                       <h2 className="text-3xl font-semibold mb-6">Useful Links</h2>
                    <ul className="cursor-pointer space-y-6 text-xl">
                        <li className="hover:text-primary">Home</li>
                        <li className="hover:text-primary">About</li>
                        <li className="hover:text-primary">Contact</li>
                        <li className="hover:text-primary">Privacy Policy</li>
                        <li className="hover:text-primary">Use Case</li>
                    </ul>
                       </div>
                    <div className="w-full">
                    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                          <div className="flex flex-col justify-center">
                          <div className="flex items-center">
                    <MdAddIcCall size={35} className='text-primary'/><span className="text-xl ml-2"> +123 456 789</span>

                    </div>
                    <div className="flex items-center mt-4">
                    <MdOutlineEmail size={35} className='text-primary'/><span className="text-xl ml-2"> 6fS5W@example.com</span>
                    </div>
                    <div className="flex items-center mt-4">
                    <CiLocationOn size={35} className='text-primary'/><span className="text-xl ml-2"> 123 Main Street, Anytown USA</span>
                    </div>
                          </div>
                </div>
                </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer