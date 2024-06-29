import React from 'react'
import SMWZMockup from '../assets/SMWZMockup.png'
import ChatMateMockup from '../assets/ChatMateMockup.png'
import CrypTrackerMockup from '../assets/CrypTrackerMockup.png'
import MuseSphereMockup from '../assets/MuseSphereMockup.png'

const Project = () => {
  return (
      <>
        <div className='max-w-screen-xl px-14 max-[900px]:px-[1em] mx-auto pb-24 max-[900px]:pb-8 max-[900px]:pt-5 bg-[#f2f2f2]'>
        <div className='flex items-center justify-center gap-12 ml-20 max-[900px]:ml-0 '>
          <div className='flex items-center justify-center gap-4 '>
        <h1 className='tracking-wider uppercase text-[3.8vw] max-[900px]:text-[22px] font-[400] text-[#212121] font-[Satoshi Light]'>feat proj<span className='font-[Migra] font-[400] italic text-[4.2vw] max-[900px]:text-[24px] max-[900px]:mr-1  text-[#603ae1] mr-2'>ec</span>ts</h1>  
        <h1 className='text-[#212121]/60 text-[1.7vw] font-[500] font-[Satoshi Light]'>(02)</h1>
        </div>
        </div>
        <svg className="o-ui-arrow rotate-90  stroke-[#212121]/40  ml-[80.1%] max-[900px]:ml-[90.1%]  max-[900px]:w-[25px] max-[900px]:h-[25px] " width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.10162 3.10156L62.9999 62.9999" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M63 1.00001L63 63L0.999989 63" stroke-linecap="round" stroke-linejoin="round"></path> </svg>


         <div className='flex flex-col justify-center w-[45vw] gap-4 max-[900px]:mt-[-3%]   '>
    <div className='flex flex-col justify-center w-[40vw] gap-4 relative'>
        <div className='w-[45vw]  overflow-hidden hover:scale-[0.94] ease-in-out duration-300 cursor-pointer relative group'>
            <img className='overflow-hidden h-3xl w-3xl object-cover' src={SMWZMockup} alt="" />
            <button className='absolute inset-0 flex items-center justify-center bg-[#212121] bg-opacity-50 text-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <a href="https://github.com/Munis2003/SMWZ-MOVIE-WEBAPP"><h1 className='uppercase text-[#f2f2f2] text-[2.3vw] font-[Migra] font-[400] '>SMWZ</h1></a> 
             <a target='_blank' href="https://github.com/Munis2003/SMWZ-MOVIE-WEBAPP"><button className='max-[900px]:hidden absolute top-[85%] left-[5%] flex items-center gap-3 border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl p-2 text-[14px] font-[Satoshi Light]'>View source code <i className="ri-github-fill text-[20px]"></i></button></a>
 
            </button>
        </div>
    </div>
</div>
         
         
    
         <div className='flex items-center justify-end mt-[-5%] max-[900px]:mt-4 max-[900px]:px-[1.4em] px-14'>
    <div className='flex flex-col justify-center w-[40vw] gap-4 relative'>
        <div className='w-[45vw]  overflow-hidden hover:scale-[0.94] ease-in-out duration-300 cursor-pointer relative group'>
            <img className='overflow-hidden h-3xl w-3xl object-cover' src={ChatMateMockup} alt="" />
            <button className='absolute inset-0 flex items-center justify-center bg-[#212121] bg-opacity-50 text-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <a target='_blank' href="https://github.com/Munis2003/ChatMate/tree/main"><h1 className='text-[#f2f2f2] text-[2.3vw] uppercase font-[Migra] font-[400]'>Chat Mate</h1></a>
              <a target='_blank' href="https://github.com/Munis2003/ChatMate/tree/main"><button className=' absolute top-[85%] left-[5%] max-[900px]:hidden flex items-center gap-3  border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl p-2 text-[14px] font-[Satoshi Light]'>View source code <i className="ri-github-fill text-[20px]"></i></button> </a>
 
            </button>
        </div>
    </div>
</div>

    
<div className='flex flex-col justify-center w-[45vw] gap-4 mt-[-5%] max-[900px]:mt-4 '>
    <div className='flex flex-col justify-center w-[40vw] gap-4 relative'>
        <div className='w-[45vw]  overflow-hidden hover:scale-[0.94] ease-in-out duration-300 cursor-pointer relative group'>
            <img className='overflow-hidden h-3xl w-3xl object-cover' src={CrypTrackerMockup} alt="" />
            <button className='absolute inset-0 flex items-center justify-center bg-[#212121] bg-opacity-50 text-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <a href="https://github.com/Munis2003/CrypTracker"><h1 className='text-[#f2f2f2] text-[2.3vw] uppercase font-[Migra] font-[400]'>Cryp Tracker</h1></a>
              <a target='_blank' href="https://github.com/Munis2003/CrypTracker"><button className='max-[900px]:hidden absolute top-[85%] left-[5%] flex items-center gap-3 border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl p-2 text-[14px] font-[Satoshi Light]'>View source code <i className="ri-github-fill text-[20px]"></i></button> </a>
 
            </button>
        </div>
    </div>
</div>
        
    
<div className='flex items-center justify-end  mt-[-5%] max-[900px]:mt-4 max-[900px]:px-[1.4em] px-14'>
    <div className='flex flex-col justify-center w-[40vw] gap-4 relative'>
        <div className='w-[45vw]  overflow-hidden hover:scale-[0.94] ease-in-out duration-300 cursor-pointer relative group'>
            <img className='overflow-hidden h-3xl w-3xl object-cover' src={MuseSphereMockup} alt="" />
            <button className='absolute inset-0 flex items-center justify-center bg-[#212121] bg-opacity-50 text-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <a href="https://github.com/Munis2003/MuseSphere"><h1 className=' text-[#f2f2f2] text-[2.3vw] uppercase font-[Migra] font-[400]'>Muse Sphere</h1></a>
              <a target='_blank' href="https://github.com/Munis2003/MuseSphere"><button className='max-[900px]:hidden absolute top-[85%] left-[5%] flex items-center gap-3 border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl p-2 text-[14px] font-[Satoshi Light]'>View source code <i className="ri-github-fill text-[20px]"></i></button></a>
 
            </button>
        </div>
    </div>
</div>

        </div>
        <div id='project' className='hidden lg:block'></div>
          
      </>
    )
}

export default Project