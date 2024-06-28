import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className='max-w-screen-xl px-14 mx-auto pt-10 py-5'>
        <div className='nav-left'>
          <div className='links'>
            <nav className='flex items-center uppercase justify-between text-[12px] font-regular text-[#f2f2f2]/70 font-[Satoshi Medium]'>
              <Link className='hover:text-[#f2f2f2]' to='/'>Munis Abbas</Link>
              <Link className='hover:text-[#f2f2f2]' to='/work'>Project</Link>
              <div className='relative hover:text-[#f2f2f2]' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className=' uppercase flex items-center'>
                  Social
                  
                  <span className={`ml-1 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}><i className="ri-arrow-down-s-line text-[12px]"></i></span>
                </button>
                {dropdownOpen && (
                  <div className='absolute ml-[-29%] w-[230%] bg-[#393939]/30 text-[11px] text-[#f2f2f2]/70 py-1 mt-1 font-[Satoshi Medium] rounded-xl shadow-lg'>
                    <a target='_blank' href='mailto: munisabbas2003@gmail.com' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>Email</a>
                    <a target='_blank' href='https://www.linkedin.com/in/munisabbas/' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>LinkedIn</a>
                    <a target='_blank' href='https://github.com/Munis2003' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>Github</a>
                    <a target='_blank' href='https://www.instagram.com/abbas.munis110/' className='block px-4 py-2 hover:text-[#f2f2f2]'>instagram</a>
                  </div>
                )}
              </div>
              <a target='_blank' href='mailto: munisabbas2003@gmail.com' className='text-[#603AE1]/70 hover:text-[#603AE1]' to='/'>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

