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
        <div className='max-w-screen-xl px-14 mx-auto mt-5 flex items-center justify-center'>
          <div className=''>
            <div className='flex items-center justify-center'>  
              <img className='object-cover w-[82%]' src={home1} alt="" />
            </div>
            <div onClick={scrollToAbout} className='flex mt-10 ml-[-4.9%] gap-3 items-center text-[#f2f2f2]/70 hover:text-[#f2f2f2] cursor-pointer'>
              <button >
                <FaArrowDown className='w-6 h-6 border-[1.4px] border-white/70 rounded-full p-[5px]' />
              </button>
              <h5 className='uppercase text-[12px] tracking-wider font-[Satoshi Medium]'>Scroll to explore</h5>  
            </div> 
          </div>
        </div>
      </div>
      <About ref={aboutRef} />
    </>
  );
}

export default Homepage;

