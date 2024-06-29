import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
import Marque from './Marque';
import { Link } from 'react-router-dom';
import MD from '../assets/MD1.png'

const Contact = () => {
  return (
    <>
    <div className='contact hidden lg:block'></div>
     <div className=' max-w-screen-xl px-14 max-[900px]:px-[1em] py-5 pt-3 max-[900px]:py-3 max-[900px]:pt-0  border-t-[1px] bg-[#f2f2f2]'>
        <Marque/>
        <div className='flex items-center max-[900px]:mt-1  '>  
          <h1 className='font-[Magilio-Regular] text-[10vw] max-[900px]:text-[12vw] text-[#212121]/95'>Let's <span className='footer-span font-[Magilio-Regular] text-[#212121]/85'>C</span>onnect</h1>
        <a target='_blank' href="mailto: munisabbas2003@gmail.com"><button style={{boxShadow:'0 0 0.15em #603ae1'}}  className='w-10 h-10 max-[900px]:w-4 max-[900px]:h-4 bg-[#603ae1] ml-7 max-[900px]:ml-3 flex items-center justify-center rounded-full text-md text-zinc-900 '><i className="ri-corner-down-right-line max-[900px]:text-[6px] max-[900px]:mt-[1px] max-[900px]:ml-[1px]  text-[16px] ml-[2px] mt-1 text-[#f2f2f2]"></i></button></a>
     </div>
     <div className='flex items-center justify-between mt-8 max-[900px]:mt-3'>
        <Link to='/' onClick={()=>window.scrollTo(0,0)}><img className= 'w-[55px] max-[900px]:w-[20px]' src={MD} alt="" /></Link>
        <ul className='flex  items-center gap-12 ml-24 max-[900px]:ml-12 max-[900px]:text-[9px] text-[15px] max-[900px]:gap-4 font-[Satoshi Light]'>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href='mailto: munisabbas2003@gmail.com'>Email</a>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href="https://www.linkedin.com/in/munisabbas/">LinkedIn</a>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href="https://github.com/Munis2003">Github</a>
            <a className='text-[#603ae1]/70 hover:text-[#603ae1]' target='_blank' href="https://drive.google.com/file/d/1up7Ztqrru6hLTFLTvhFe2gd1hIdamwp7/view?usp=drive_link">Resume</a>
        </ul>
     </div>
     </div>

    </>
    
   
  )
}

export default Contact
