import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const About = forwardRef((props, ref) => {
  return (
    <>
      <div id='about' ref={ref} className='max-w-screen-xl mx-auto relative'>
        <div className='px-14'>
          <h1 className='absolute left-[87.1%] top-[7%] uppercase text-[12px] font-[Satoshi Light] text-[#212121]/70 '>Who I <span className='italic text-[14px] text-[#603ae1]/70 font-[Migra] font-[400]'>Am</span></h1>
          <div className='mt-24 pt-12 font-[Satoshi Light]'>
            <h1 className='text-[3.3vw] w-[85%] font-[400] leading-[120%] text-[#212121] mt-7'>
              I'm Munis, a 21-year-old frontend developer based in India with a passion for solving problems through 
              <span className='text-[#603AE1] font-[Migra] font-[400] italic'> simple</span> & 
              <span className='text-[#603AE1] font-[Migra] font-[400] italic'> interactive designs.</span>
            </h1>
            <h1 className='text-[15px] w-[45%] font-[400] font-[Satoshi Light] text-[#212124] mt-5'>
              Depending on the project requirement, I try to opt for a suitable design
              style—Minimalistic, colourful, typographic, tech, elegant, etc.—while sticking
              to the core design principles.
            </h1>
            <Link to="/aboutme" onClick={()=>window.scrollTo(0,0)}>
              <button className='font-[Satoshi Light] border-[1.4px] rounded-[200px] py-2 px-5 mt-5 border-[#212121]/80 text-[13px]  text-[#212121]/80'>
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
