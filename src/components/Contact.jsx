import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
import Marque from './Marque';
import { Link } from 'react-router-dom';
import MD from '../assets/MD1.png'

const Contact = () => {
  return (
    <>
    <div className='contact'></div>
     <div className=' max-w-screen-xl px-14 py-5 pt-3 border-t-[1px] bg-[#f2f2f2]'>
        <Marque/>
        <div className='flex items-center '>  
          <h1 className='font-[Magilio-Regular] text-[10vw] text-[#212121]/95'>Let's <span className='footer-span font-[Magilio-Regular] text-[#212121]/85'>C</span>onnect</h1>
        <a target='_blank' href="mailto: munisabbas2003@gmail.com"><button style={{boxShadow:'0 0 0.25em #603ae1/70'}}  className=' w-10 h-10 bg-[#603ae1]/90 ml-7 flex items-center justify-center rounded-full text-md text-zinc-900 '><IoMdReturnRight color='white' size={16}/></button></a>
     </div>
     <div className='flex items-center justify-between mt-8'>
        <Link to='/' onClick={()=>window.scrollTo(0,0)}><img className= 'w-[55px]' src={MD} alt="" /></Link>
        <ul className='flex  items-center gap-12 ml-24 text-[15px] mr-10 font-[Satoshi Light]'>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href='mailto: munisabbas2003@gmail.com'>Email</a>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href="https://www.linkedin.com/in/munisabbas/">LinkedIn</a>
            <a className='text-[#212121]/70 hover:text-[#212121]' target='_blank' href="https://github.com/Munis2003">Github</a>
            <a className='text-[#603ae1]/70 hover:text-[#603ae1]' target='_blank' href="#">Resume</a>
        </ul>
     </div>
     </div>

    </>
    
   
  )
}

export default Contact
