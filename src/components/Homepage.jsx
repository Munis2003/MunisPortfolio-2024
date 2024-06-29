import React, { useRef } from 'react';
import { FaArrowDown } from "react-icons/fa";
import About from './About';
import home1 from '../assets/home1.png';

const Homepage = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='w-full bg-[#212121]'>
        <div className='max-w-screen-xl lg:px-14 md:px-14 sm:px-6 lg:mb-24 px-4 mx-auto mt-5 '>
          <div className='w-full'>
            <div className='flex items-center justify-center w-full'>  
              <img className='object-cover w-[82%] md:w-[70%]' src={home1} alt="Home" />
            </div>  
            {/* <div className='flex items-center justify-between  mt-10 lg:mt-20 mb-5'> */}
              <div onClick={scrollToAbout} className='flex mt-10 max-[900px]:mb-8 max-[900px]:mt-10  items-center gap-3 md:gap-4 lg:gap-5 cursor-pointer text-[#f2f2f2]/70 hover:text-[#f2f2f2]'>
                <button>
                  <FaArrowDown className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 border-[1.4px] md:border-[1.4px] lg:border-[1.4px] border-white/70 rounded-full p-[5px] md:p-[6px] lg:p-[8px]' />
                </button>
                <h5 className='uppercase text-[9px] md:text-[11px] lg:text-[12px] tracking-wider font-[Satoshi Light]'>Scroll to explore</h5>  
              </div> 
              {/* <div className='flex flex-col items-center gap-2 lg:hidden'>
                <a target='_blank' rel='noopener noreferrer' href='mailto: munisabbas2003@gmail.com'><i className="ri-mail-fill text-[6vw] md:text-[4vw] lg:text-[2.3vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full "></i></a>
                <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/munisabbas/"><i className="ri-linkedin-box-fill text-[6vw] md:text-[4vw] lg:text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full"></i></a>
                <a target='_blank' rel='noopener noreferrer' href="https://github.com/Munis2003"><i className="ri-github-fill text-[6vw] md:text-[4vw] lg:text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full"></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/abbas.munis110/'><i className="ri-instagram-fill text-[6vw] md:text-[4vw] lg:text-[2.5vw] text-[#212121]/90 bg-[#f2f2f2] p-1 rounded-full"></i></a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <About ref={aboutRef} />
    </>
  );
}

export default Homepage;
