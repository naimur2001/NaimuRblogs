import { useState } from "react";

//A Tech Pic
const FirstSection = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [{img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: "vr",}, {img: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "Room",}, {img: "https://images.pexels.com/photos/3747542/pexels-photo-3747542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: "geo",}, {img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600", tags: "code",}, {img: "https://images.pexels.com/photos/10625374/pexels-photo-10625374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tags: "bd",},];
  const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
  return (
    <div>
      <div className='max-w-5xl mx-auto mb-5'>
<div className="main flex lg:flex-row flex-col justify-between gap-10 w-full shadow-2xl shadow-slate-300 lg:p-4 p-2 rounded-lg">
<div className='textContent flex flex-col justify-center lg:w-1/2 ' >
<div >
  <h1 className='font-extrabold text-2xl my-2'>
  Building the future <br /> (software engineer student) <br />
  & <br />
  {/* exploring the world <br />(tech, travel, geopolitics). */}
  exploring the world <br />(tech, travel).
</h1>
<p className='font-medium text-xl text-gray-500 my-2'>Tech whiz, hooked on how innovation solves problems and builds a brighter future. From cutting-edge software to sleek gadgets, I devour it all!</p>
</div>
</div>

<div className='slider  lg:w-1/2'>

<div className="sm:w-full h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[75%] bg-black/30 relative duration-200 rounded-md`}
                    >
                        <img src={slide.img} className="w-full h-full rounded-md" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
</div>
</div>
      </div>
    </div>
  )
}

export default FirstSection