import React, { useRef } from 'react';
import { FaArrowDown } from "react-icons/fa";
import About from './About';
import home1 from '../assets/home1.png'

const Homepage = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='w-full'>
        <div className='max-w-screen-xl lg:px-14 max-[900px]:px-[1em] mx-auto mt-5 flex items-center justify-center'>
          <div className=''>
            <div className='flex items-center justify-center'>  
              <img className='object-cover w-[82%]' src={home1} alt="" />
            </div>  
            <div className='flex items-center justify-between max-[900px]:mb-5'>
            <div onClick={scrollToAbout} className='flex items-center max-[900px]:gap-2 gap-3 max-[900px]:px-[1.2em] max-[900px]:mt-[14%]  mt-10 ml-[-4.9%] lg-px-14 text-[#f2f2f2]/70 hover:text-[#f2f2f2] cursor-pointer'>
              <button >
                <FaArrowDown className='max-[900px]:w-5 max-[900px]:h-5 max-[900px]:border-[1.2px]  w-6 h-6 border-[1.4px] border-white/70 rounded-full p-[5px] max-[900px]:p-[5px]' />
              </button>
              <h5 className='uppercase text-[12px]  max-[900px]:text-[9px] tracking-wider font-[Satoshi Light]'>Scroll to explore</h5>  
            </div> 
            <div className='flex flex-col items-center gap-2  max-[900px]:mt-[-18.6%] lg:hidden'>
            <a target='_blank' href='mailto: munisabbas2003@gmail.com'><i className="ri-mail-fill text-[2.3vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full "></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/munisabbas/"><i className="ri-linkedin-box-fill text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full"></i></a>
            <a target='_blank' href="https://github.com/Munis2003"><i className="ri-github-fill text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full"></i></a>
            <a target='_blank' href='https://www.instagram.com/abbas.munis110/'><i className="ri-instagram-fill text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2]  p-1 rounded-full"></i></a>
            </div>
            </div>
          
          </div>
        </div>
      </div>
      <About ref={aboutRef} />
    </>
  );
}

export default Homepage;

