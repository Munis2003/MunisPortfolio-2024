import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Plus from '../assets/plus.svg'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className='max-w-screen-xl mx-auto py-5 lg:px-14 lg:pt-10 max-[900px]:px-[1em] bg-[#212121]'>
        <div className='nav-left'>
          <div className='links'>
            <nav className='max-[900px]:flex max-[900px]:text-[9px] lg:flex items-center justify-between uppercase  text-[12px]  font-regular text-[#f2f2f2]/70 font-[Satoshi Light]'>
              <Link className='hover:text-[#f2f2f2]' to='/'>Munis Abbas</Link>
              <Link className='hover:text-[#f2f2f2]' to='/work'>Projects</Link>
              <div className='hidden lg:block relative hover:text-[#f2f2f2]' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className='uppercase flex items-center'>
                  Social
                  
                  <span className={`ml-1 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}><i className="ri-arrow-down-s-line text-[12px]"></i></span>
                </button>
                {dropdownOpen && (
                  <div className='absolute ml-[-29%] w-[230%] bg-[#393939]/30 text-[11px] text-[#f2f2f2]/70 py-1 mt-1 font-[Satoshi Light] rounded-xl shadow-lg'>
                    <a target='_blank' href='mailto: munisabbas2003@gmail.com' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>Email</a>
                    <a target='_blank' href='https://www.linkedin.com/in/munisabbas/' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>LinkedIn</a>
                    <a target='_blank' href='https://github.com/Munis2003' className='block px-4 py-2 hover:text-[#f2f2f2] border-b-[1.2px] border-[#f2f2f2]/10'>Github</a>
                    <a target='_blank' href='https://www.instagram.com/abbas.munis110/' className='block px-4 py-2 hover:text-[#f2f2f2]'>instagram</a>
                  </div>
                )}
              </div>
              <a target='_blank' href='mailto: munisabbas2003@gmail.com' className='text-[#603AE1]/70 hover:text-[#603AE1]' to='/'>Contact</a>
            </nav>
            {/* <h1 className="lg:hidden uppercase font-[Satoshi Light] flex items-center gap-1 justify-end text-[#f2f2f2]/70 text-[9px] hover:text-[#f2f2f2]"><img className='w-[5px] rotate-[135deg]' src={Plus} alt="" />Menu</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

