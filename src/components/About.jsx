import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='max-w-screen-xl mx-auto relative bg-[#f2f2f2] h-fit'>
        <div id='about' className='hidden lg:block'></div>
        <div className='lg:px-14 max-[900px]:px-[1em]'>
          <h1 className='absolute lg:left-[91.8%] top-[7%] max-[900px]:left-[87.1%] uppercase text-[12px] max-[900px]:text-[7px] font-[Satoshi Light] text-[#212121]/70 '>Who I <span className='italic text-[14px] max-[900px]:text-[9px] text-[#603ae1]/70 font-[Migra] font-[400]'>Am</span></h1>
          <div className='md:mt-24 md:pt-12 max-[900px]:pt-[1px]  font-[Satoshi Light]'>
            <h1 className='text-[3.3vw] max-[900px]:text-[12px] max-[900px]:pt-3 w-[85%] max-[900px]:w-[85%] font-[400] leading-[120%] text-[#212121] mt-7'>
              I'm Munis, a 21-year-old frontend developer based in India with a passion for solving problems through 
              <span className='text-[#603AE1]  font-[Migra] font-[400] italic'> simple</span> & 
              <span className='text-[#603AE1] font-[Migra] font-[400] italic'> interactive designs.</span>
            </h1>
            <h1 className='text-[15px] w-[45%] max-[900px]:w-[65%]  max-[900px]:text-[7px] max-[900px]:mt-1 font-[Satoshi Light] text-[#212121] mt-5'>
              Depending on the project requirement, I try to opt for a suitable design
              style—Minimalistic, colourful, typographic, tech, elegant, etc.—while sticking
              to the core design principles.
            </h1>
            <Link to="/aboutme" onClick={()=>window.scrollTo(0,0)}>
              <button className='font-[Satoshi Light] border-[1.4px] rounded-[200px] py-2 px-5 mt-5 max-[900px]:py-1 max-[900px]:px-2 max-[900px]:mt-2   max-[900px]:border-[1.2px] border-[#212121]/80 max-[900px]:text-[7px] text-[14px]  text-[#212121]/80'>
                <i className="ri-circle-line mr-3 max-[900px]:mr-1 text-[#212121]/80 hover:text-[#603ae1]"></i>More About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
