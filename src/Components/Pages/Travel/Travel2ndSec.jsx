import React from 'react'

const Travel2ndSec = () => {
  return (
    <div className="my-10">
    <div className="main grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
    
    <div className="flex flex-col justify-center items-center gap-5">
    <h1 className="text-3xl font-bold">"Explore the world and embrace new horizons."</h1>
<p className="font-medium text-gray-500">Let's approach travel with curiosity and respect, acknowledging its power to enrich and transform us. By exploring responsibly and immersing ourselves in diverse cultures, we can create unforgettable experiences and foster global connections."</p>

    </div>
    <div>
    <div className="relative lg:mx-16">
    <img src="https://images.pexels.com/photos/7738996/pexels-photo-7738996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="lg:h-[550px] lg:w-[400px] " alt="" />
    <img src="https://images.pexels.com/photos/1441932/pexels-photo-1441932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="absolute h-96 w-64 bottom-12 -left-14 lg:flex hidden rounded-xl" />
    </div>
    </div>
    </div>
        </div>
  )
}

export default Travel2ndSec