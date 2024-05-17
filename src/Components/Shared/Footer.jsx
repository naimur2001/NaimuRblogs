import { Link } from "react-router-dom"
import { FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from "react";


const Footer = () => {

  const socialLinks = [
    {
      id: 3,
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/nr2001/',
    },
    {
      id: 1,
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@naimurrahman2001/videos',
    },
    {
      id: 2,
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/naimur2001',
    },
    {
      id: 4,
      icon: <FaGithub />,
      url: 'https://github.com/naimur2001',
    },
    {
      id: 5,
      icon: <FaEnvelope />,
      url: 'mailto:naimurrahman18thapril@gmail.com',
    },
  ];


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <footer className="flex flex-col justify-around gap-5 bg-sky-50 py-10 text-black">
        <nav className="text-lg">
            <ul className="flex h-full flex-wrap items-center justify-center gap-3 font-semibold">
            <Link to={'/'}>
        <li className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>

   
      <li onClick={handleMenuToggle} className="relative group flex  cursor-pointer flex-col">
  
 Genre <span className="mt-[2px] h-[3px] w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>  


{isMenuOpen && (
  <ul className="absolute  top-6 lg:top-8 text-sm lg:text-base z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
      <li className="px-3 hover:underline">
          <Link to={'/tech'}>Technology</Link>
      </li>
      <li className="px-3 hover:underline">
          <Link to={'/travel'}>Travel</Link>
      </li>
      {/* <li className="px-3 hover:underline">
          <Link to={'/geopol'}>GeoPolitics</Link>
      </li> */}
  </ul>
)}
</li>
      
          <Link to={'/about'}>
          <li className="group flex  cursor-pointer flex-col">
            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
          <Link to={'/connect'}>
          <li className="group flex  cursor-pointer flex-col">
            Connect<span className="mt-[2px] h-[3px]  w-[0px] rounded-full text-black group-hover:bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
            </ul>
        </nav>
        <nav className="text-lg">
            <ul className="flex h-full flex-wrap items-center justify-center gap-5">
               {
                socialLinks?.map((sl,ind)=><>
                <li key={ind}>
                  <a href={sl.url}>
                    {sl.icon}
                  </a>
                </li>
                </>)
               }
            </ul>
        </nav>
        <aside className="text-center text-sm">
            <p>&copy; Content and Developed By Naimur Rahman</p>
        </aside>
    </footer>
</div>
  )
}

export default Footer