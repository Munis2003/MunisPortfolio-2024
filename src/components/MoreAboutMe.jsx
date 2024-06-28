import React from 'react'
import SkillsMarque from './SkillsMarque'
import Contact from './Contact'
import intro from '../assets/Introbw.mp4'

const MoreAboutMe = () => {
  return (
    <>
    <div className='max-w-screen-xl px-14 mx-auto'>
    <h1 className='text-[4.3vw] w-[49%] mt-12 mb-8  leading-[120%] text-[#f2f2f2] font-[Satoshi Light]'>Designing meaningful
experiences for <span className='text-[#603ae1] font-[Migra]'>brands </span>
& <span className='text-[#603ae1] font-[Migra]'>businesses</span></h1>

    <div className='w-[100%] h-[500px] overflow-hidden bg-[#f2f2f2]  mb-10'>
      <video controls className='w-[100%] h-[500px] object-cover' src={intro}></video>
    </div>
    

    <h1 className='text-[3.3vw] w-[73%] leading-[120%] text-[rgb(242,242,242)] mt-7 font-[Satoshi Light]'>A frontend developer dedicated to addressing challenges through elegant and user-friendly design solutions.</h1>
    <h1 className='text-[15px] font-[Satoshi Light] w-[48%] text-[#f2f2f2]/70 mt-8' >
I am a Computer Scrience graduate, and curiosity dragged me to learn Javascript. Then, I learned React.js and GSAP, among many other
things. Currently, I’m diving into Next.js and Three.js to create some awesome stuff!</h1>
 <h1 className='text-[15px] font-[Satoshi Light] w-[48%] text-[#f2f2f2]/70 mt-5' >Starting out, I began with a 2-month internship focused on developing my skills in web development and design. Following that, I freelanced for 6 months with an agency, refining my skills and delivering solutions for diverse clients.</h1>
<SkillsMarque/>

<div className='experience relative'>
<h1 className=' uppercase text-[12px] text-[#f2f2f2]/70 font-[Satoshi Light]'>Exper<span className='italic text-[13px] ml-[0.1%] text-[#603ae1]/70 font-[Migra]'>ience</span></h1>
    <h1 className='text-[#f2f2f2] text-[18px] w-[65%] mt-3 leading-[20px] font-[Satoshi Light]'>I've achieved remarkable success in entrepreneurial environments, leading innovative projects, and consistently achieving remarkable growth and impactful results.</h1>
    <h1 className='text-[hsl(0,0%,95%)] text-[16px] w-[65%] mt-1 font-[Satoshi Light] '>Here are my professional experiences and expertise:</h1>
    <div className='mt-5 flex items-center justify-between border-b-[1.2px] pb-3 border-[#f2f2f2]/20'>
   <div>
    <h1 className='text-[16px] font-[Satoshi Light]'>Graphic Designer</h1>
    <h1 className='text-[13px] font-[Satoshi Light] text-[#f2f2f2]/70'>May 2021 - Oct 2021</h1>
    </div>
    <h1 className='text-[16px] font-[Satoshi Light] text-[#f2f2f2]/70 w-[20%]'>Vision</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] pb-3 border-[#f2f2f2]/20'>
   <div>
    <h1 className='text-[16px] font-[Satoshi Light]'>Web Developer & Designer</h1>
    <h1 className='text-[13px] font-[Satoshi Light] text-[#f2f2f2]/70'>May 2023 - July 2023</h1>
    </div>
    <h1 className='text-[16px] font-[Satoshi Light] text-[#f2f2f2]/70 w-[20%]'>Hypercube Labs</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] pb-3 border-[#f2f2f2]/20'>
   <div>
    <h1 className='text-[16px] font-[Satoshi Light]'>Freelance Web Developer</h1>
    <h1 className='text-[13px] font-[Satoshi Light] text-[#f2f2f2]/70'>Aug 2023 - Jan 2024</h1>
    </div>
    <h1 className='text-[16px] font-[Satoshi Light] text-[#f2f2f2]/70 w-[20%]'>ContX Agency</h1>
    </div>
</div>



<div className='skills stack relative mt-14 pb-48'>
<h1 className='uppercase text-[12px] text-[#f2f2f2]/70 font-[Satoshi Light]'>My skills<span className='italic text-[13px] text-[#603ae1]/70 ml-[0.1%] font-[Migra]'>stack</span></h1>
  
   <h1 className='text-[2.7vw] mb-5 mt-2 font-[Satoshi Light]'>Languages & Liabraries</h1>
   <div className='flex items-center justify-between border-b-[1.2px] py-2 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Html, css, javascript</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Frontend development</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-2 pb-4   border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Tailwind, Bootstrap</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>CSS frameworks</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-2 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>React, Redux, Gatsby, gsap</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Javascript liabraries</h1>
    </div>

   
    <h1 className='text-[2.7vw] mt-10 mb-5 font-[Satoshi Light]'>Tools & Platforms</h1>
<div className=''> 
   <div className='flex items-center justify-between border-b-[1.2px] py-1 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Figma</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Product/UI design</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-1 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Wix</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>No-code tool</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-1 pb-4   border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Git & Github</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Repository management</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-1 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Firebase</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Cloud database</h1>
    </div>
    
    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-1 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Notion</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Project management</h1>
    </div>

    <div className='mt-3 flex items-center justify-between border-b-[1.2px] py-1 pb-4 border-[#f2f2f2]/20'>
    <h1 className='text-[14px] uppercase font-[Satoshi Light]'>Balsamiq Cloud</h1>
    <h1 className='text-[14px] text-[#f2f2f2]/70 w-[20%] font-[Satoshi Light]'>Wireframing</h1>
    </div>
  </div>   
    </div>
</div>
<Contact/>



    </>
  )
}

export default MoreAboutMe



