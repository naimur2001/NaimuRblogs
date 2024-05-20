import React from 'react'
import { FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Title from '../../Title/Title';
import ConncetForm from './ConncetForm';

const Connect = () => {
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
  return (
    <div>
      <div className="max-w-5xl mx-auto lg:px-0 px-2">
      <ul className=" my-10 flex h-full flex-wrap items-center justify-center gap-5">
               {
                socialLinks?.map((sl,ind)=><>
                <li className='text-2xl text-sky-300 hover:scale-105 ease-linear duration-300 delay-300' key={ind}>
                  <a href={sl.url}>
                    {sl.icon}
                  </a>
                </li>
                </>)
               }
            </ul>


            <div>
              <Title title={"Connect With Me"} side={"text-center"}></Title>
            </div>
<div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
  
<ConncetForm></ConncetForm>
<div className='lg:px-0 px-2 my-10' >
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.769607738977!2d90.34088854047799!3d23.735030821614338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf486a645f2d%3A0x16f8f87df710d4af!2sHazaribag%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715981147734!5m2!1sen!2sbd"       className="w-full h-64 lg:h-[330px] max-w-full lg:px-0 px-2" allowfullscreen="" loading="lazy" ></iframe>
</div>
</div>
      </div>
    </div>
  )
}

export default Connect