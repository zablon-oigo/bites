import React from 'react';

import img2 from '../assets/biryani2.png';


const serviceData = [
  {
    id: 1,
    name:'Rice Curry',
    image: img2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita facilis neque voluptate odit dolores fugiat. Obcaecati suscipit atque quas.',
  },
  {
    id: 2,
    name:'Biryani',
    image: img2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita facilis neque voluptate odit dolores fugiat. Obcaecati suscipit atque quas.',
  },
  {
    id: 3,
    name:'Chicken Masala',
    image: img2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita facilis neque voluptate odit dolores fugiat. Obcaecati suscipit atque quas.',
  },
];

function Services() {
  return (
    <>
      <div className="py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container">
          <div className=" mb-20 max-w-[600px] mx-auto">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold">Our Services</h1>
            <h3 className="text-center text-4xl md:text-6xl m-2 font-bold">Services</h3>
            <p className="text-md text-gray-500 text-center ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad laboriosam aspernatur repudiandae soluta excepturi numquam. Amet quae eius cum magnam, natus, voluptate adipisci, soluta nam repellat autem quam ipsum!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-20 place-items-center">
          {serviceData.map(({ id, image,name, description }) => (
            <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary duration-300 p-4 shadow-xl'>
                 <div className="h-[100px]">
                 <img src={image} alt="" className="max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                 </div>
                 <div className="py-4 px-2">
                 <h2 className="group-hover:text-white text-2xl font-bold text-center dark:text-white">{name}</h2>
              <p className="group-hover:text-white duration-300 text-xl line-clamp-3">{description}</p>
                 
                 </div>
 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
