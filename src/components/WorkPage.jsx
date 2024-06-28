import React from 'react';
import WorkPage1 from '../assets/WorkPage1.png'
import WorkPage2 from '../assets/WorkPage2.png'
import WorkPage3 from '../assets/WorkPage3.png'
import WorkPage4 from '../assets/WorkPage4.png'
import WorkPage5 from '../assets/WorkPage5.png'
import WorkPage6 from '../assets/WorkPage6.png'
import WorkPage7 from '../assets/WorkPage7.png'


const WorkPage = () => {
  const data =[
  {name:'SMWZ',desc:' Crafted an innovative movie database app with inclusive design, leveraging TMDB API for intuitive infinite scrolling, captivating filters.',img:`${WorkPage1}`,link:'https://github.com/Munis2003/SMWZ-MOVIE-WEBAPP'},
  {name:'ChatMate',desc:'Introducing ChatMate, an advanced AI chatbot with seamless voice command integration for intuitive interactions, ensuring a dynamic user experience.',img:`${WorkPage2}`,link:'https://github.com/Munis2003/ChatMate/tree/main'},
  {name:'MuseSphere',desc:'Built MuseSphere, an innovative video call app with inclusive design, utilizing ZegoCloud API for intuitive call handling and captivating UI/UX.',img:`${WorkPage3}`,link:'https://github.com/Munis2003/MuseSphere'},
  {name:'CrypTracker',desc:'Developed CrypTracker, an app displaying cryptocurrencies with detailed views, interactive charts, and features like search, pagination.',img:`${WorkPage4}`,link:'https://github.com/Munis2003/CrypTracker'},
  {name:'Weya.Ai',desc:'Crafted an intuitive, aesthetically-pleasing website leveraging inclusive design for Weya.ai, an innovative AI solutions provider.',img:`${WorkPage5}`,link:'https://www.weya.ai/'},
  {name:'HappySocks',desc:'Developed HappySocks, a static site showcasing various aesthetic clothing, primarily socks, designed to provide a visually pleasing user experience.',img:`${WorkPage6}`,link:'https://github.com/Munis2003/Happy-Socks-Webpage-HTML-CSS-'},
  {name:'JS Projects',desc:'Created JS-Mini-Projects to enhance programming skills through practical, hands-on learning, spanning basic to advanced JavaScript concepts.',img:`${WorkPage7}`,link:'https://github.com/Munis2003/JS-Mini-Projects'}

  ]
  return (
    <div className='max-w-screen-xl px-14 mx-auto mt-16  flex text-[#f2f2f2]'>
     <div className='w-[50%] mt-[-1%] mb-24'>
        <h1 className='text-[3.3vw] text-[#f2f2f2] mb-[-1%] font-[Satoshi Medium]'>Munis Abbas</h1>
        <p className='text-[18px] text-[#f2f2f2] mb-4 font-[Satoshi Medium]'>Front-end Developer</p>
        <p className='text-[#f2f2f2]/70 text-[15px] w-[65%] mb-10 font-[Satoshi Medium]'>I build inclusive products and create innovative solutions for digital problems.</p>
        <div className='flex items-center gap-2 text-[15px] mb-3'>
        <i className="ri-drag-move-line flex text-[15px] text-[#f2f2f2] font-[Satoshi Medium]"></i><h1 className='text-[15px]'>About</h1>
        </div>
        <div className='flex items-center gap-2 text-[#603ae1]/70'>
        <i className="ri-drag-move-line"></i><h1 className='text-[15px] font-[Satoshi Medium]'>Projects</h1>
        </div>
        
        <ul className='flex items-center gap-8 text-[15px] mt-20 font-[Satoshi Medium]'>
          <li>Email</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Github</li>
        </ul>
     </div>

     <div className='w-[50%]'>
      <div className='w-[70%]'>
     <p className=' text-[#f2f2f2]/70 mb-2 font-[Satoshi Medium]'>I specialize in designing and maintaining responsive websites that prioritize user satisfaction.</p>
        <p className='  text-[#f2f2f2]/30 mb-2 font-[Satoshi Medium]'>My passion lies in translating ideas into dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
        <p className=' text-[#f2f2f2]/70 mb-20 font-[Satoshi Medium]'>I strive to push the boundaries of <br /> web design to deliver seamless user experiences.</p> 
        </div>

        {data.map((item,index)=>{
          return(
            <div className='flex mb-10 '>
          <div className='w-[232px] h-[150px] rounded-lg overflow-hidden'>
            <img classNameme='w-full h-full' src={item.img} alt='.' />
          </div>
          <div className='ml-5 w-[60%]'>
            <p className='text-[#f2f2f2] text-[1.7vw] font-[Migra] tracking-wider'>{item.name}</p>
            <p className='text-[12px] text-[#f2f2f2]/70 w-[80%] mt-1 font-[Satoshi Medium]'>{item.desc}</p>
            <div className='flex items-center text-[#f2f2f2] text-[15px] mt-3'>
              <a target='_blank' href={item.link}><button className='flex items-center gap-3 border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl text-[#f2f2f2]/70 p-2 text-[14px] font-[Satoshi Medium]'>View source code <i className="ri-github-fill text-[20px]"></i></button> </a>
              </div>
          </div>
          

        </div>
          )
        })}

        

        
     </div>
     
    </div>
  );
};

export default WorkPage;
