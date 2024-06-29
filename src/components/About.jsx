import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className='max-w-screen-xl mx-auto relative bg-[#f2f2f2]'>
        <div id='about' className='hidden lg:block'></div>
        <div className='lg:px-14 md:px-10 sm:px-6 px-4'>
          <h1 className='absolute lg:left-[92%] left-[85%] lg:text-[12px] top-[7%] text-[9px] font-[Satoshi Light] text-[#212121]/70 uppercase'>
            Who I <span className='italic text-[9px] lg:text-[12px] text-[#603ae1]/70 font-[Migra]'>Am</span>
          </h1>
          <div className='md:mt-20 md:pt-12 sm:pt-6 pt-3 font-[Satoshi Light]'>
          <h1 className='text-[3.3vw] max-[900px]:text-[3.3vw] max-[900px]:w-[85%] md:text-[4vw] lg:text-[3.3vw] font-[400] leading-[120%] text-[#212121] mt-7'>
              I'm Munis, a 21-year-old frontend developer based in India with a passion for solving problems through
              <span className='text-[#603AE1] font-[Migra] italic'> simple</span> &
              <span className='text-[#603AE1] font-[Migra] italic'> interactive designs.</span>
            </h1>
            <p className='text-[15px] max-[900px]:text-[12px] md:text-[14px] lg:text-[15px] w-[85%] sm:w-[75%] md:w-[65%] lg:w-[45%] text-[#212121] mt-5'>
              Depending on the project requirement, I try to opt for a suitable design style—Minimalistic, colourful, typographic, tech, elegant, etc.—while sticking to the core design principles.
            </p>
            <Link to="/aboutme" onClick={() => window.scrollTo(0, 0)}>
              <button className='font-[Satoshi Light] border-[1.4px] rounded-[200px] py-2 px-5 mt-5 text-[14px] text-[#212121]/80 border-[#212121]/80'>
                <i className="ri-circle-line mr-3 text-[#212121]/80 hover:text-[#603ae1]"></i>More About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
