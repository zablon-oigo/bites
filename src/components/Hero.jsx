import React from 'react'
import bgImg from '../assets/vector.png'
import img from '../assets/biryani.png'
import img2 from '../assets/biryani3.png'
import img3 from '../assets/biryani5.png'


function Hero() {
    const images=[
        {
            id:1,
            image:img
        },
        {
            id:2,
            image:img2
        },
        {
            id:3,
            image:img3
        },
    ]
 const bgImage={
    backgroundImage:`url(${bgImg})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
 }
 const[imageId,setImageId]=React.useState(img)
  return (
    <>
        <div className="min-h-[550px] md:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
        style={bgImage}>
                   <div className="container pb-8 md:pb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col justify-center gap-4 pt-12 md:pt-0 text-center md:text-left order-2 md:order-1">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                                Welcome to the <span className="text-primary">BountifulBowl</span> zone
                            </h1>
                            <p className="text-lg font-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga totam necessitatibus aspernatur accusamus praesentium laudantium magni facilis perferendis est!
                            </p>
                            <div className="">
                                <button className="bg-gradient-to-r from-primary to to-secondary text-white px-6 py-3 rounded-md hover:scale-105 duration-300">
                                    Order Now
                                </button>
                            </div>
                            </div>

                            <div className="order-1 md:order-2 min-h-[400px] md:min-h-[450px] flex items-center justify-center relative">
                                 <div className='flex justify-center items-center h-[300px] md:h-[450px] overflow-hidden'>
                                    <img src={imageId} alt="" className="w-[400px] h-[400px] object-cover rounded-full mx-auto spin "/>
                                </div> 
                                <div className='flex md:flex-col md:top-1/2 md:-translate-y-1/2 md:py-2 justify-center gap-4 absolute py-2 -bottom-[60px] md:bottom-0 md:-right-10 bg-white/30 rounded-full  '
                                onClick={()=>setImageId(images[Math.floor(Math.random()*3)].image)}>
                                {images.map((item) => (
                                            <img
                                                src={item.image}
                                                key={item.id}
                                                alt=""
                                                className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                            />
                                        ))}
                                </div>
                            </div>  
                        </div>
                   </div>
        </div>
    </>
  )
}

export default Hero