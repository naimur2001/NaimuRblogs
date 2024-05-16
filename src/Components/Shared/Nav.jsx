
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

 const Nav = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex lg:flex-col items-center justify-between  px-4 py-2  mb-24 ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl text-black transition-all hover:scale-110 duration-300 delay-200 ease-linear lg:my-5  font-sign">
          <h2>NaimuRblogs</h2>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex font-semibold">
          <li className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
          Genre<span className="mt-[2px] h-[3px]  w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col">
            Connect<span className="mt-[2px] h-[3px]  w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
      

          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"/>
<path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"/>
<path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="#1C274C"/>
<path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C"/>
</svg>
          {dropDownState && (
            <ul className=" z-10  gap-2   absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <li className="cursor-pointer  px-6 py-2 text-black rounded-t-lg hover:bg-gray-200 ">
                Home
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-gray-200 ">
                Genre
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-gray-200 ">
                About
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-gray-200 ">
                Connect
              </li>
            </ul>
          )}
        </div>
</nav>
  

    );
};

export default Nav ;