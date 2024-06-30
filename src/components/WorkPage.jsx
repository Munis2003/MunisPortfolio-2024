import React from 'react';
import WorkPage1 from '../assets/WorkPage1.png';
import WorkPage2 from '../assets/WorkPage2.png';
import WorkPage3 from '../assets/WorkPage3.png';
import WorkPage4 from '../assets/WorkPage4.png';
import WorkPage5 from '../assets/WorkPage5.png';
import WorkPage6 from '../assets/WorkPage6.png';
import WorkPage7 from '../assets/WorkPage7.png';

const WorkPage = () => {
  const data = [
    { name: 'SMWZ', desc: 'Crafted an innovative movie database app with inclusive design, leveraging TMDB API for intuitive infinite scrolling, captivating filters.', img: WorkPage1, link: 'https://github.com/Munis2003/SMWZ-MOVIE-WEBAPP' },
    { name: 'ChatMate', desc: 'Introducing ChatMate, an advanced AI chatbot with seamless voice command integration for intuitive interactions, ensuring a dynamic user experience.', img: WorkPage2, link: 'https://github.com/Munis2003/ChatMate/tree/main' },
    { name: 'MuseSphere', desc: 'Built MuseSphere, an innovative video call app with inclusive design, utilizing ZegoCloud API for intuitive call handling and captivating UI/UX.', img: WorkPage3, link: 'https://github.com/Munis2003/MuseSphere' },
    { name: 'CrypTracker', desc: 'Developed CrypTracker, an app displaying cryptocurrencies with detailed views, interactive charts, and features like search, pagination.', img: WorkPage4, link: 'https://github.com/Munis2003/CrypTracker' },
    { name: 'Weya.Ai', desc: 'Crafted an intuitive, aesthetically-pleasing website leveraging inclusive design for Weya.ai, an innovative AI solutions provider.', img: WorkPage5, link: 'https://www.weya.ai/' },
    { name: 'HappySocks', desc: 'Developed HappySocks, a static site showcasing various aesthetic clothing, primarily socks, designed to provide a visually pleasing user experience.', img: WorkPage6, link: 'https://github.com/Munis2003/Happy-Socks-Webpage-HTML-CSS-' },
    { name: 'JS Projects', desc: 'Created JS-Mini-Projects to enhance programming skills through practical, hands-on learning, spanning basic to advanced JavaScript concepts.', img: WorkPage7, link: 'https://github.com/Munis2003/JS-Mini-Projects' }
  ];

  return (
    <div className='max-w-screen-xl px-6 sm:px-14 mx-auto mt-8 sm:mt-16 flex flex-col sm:flex-row text-[#f2f2f2]'>
      <div className='sm:w-[50%] mt-[-1%] mb-24'>
        <h1 className='text-4xl sm:text-[3.3vw] text-[#f2f2f2] mb-2 sm:mb-[-1%] font-[Satoshi Light]'>Munis Abbas</h1>
        <p className='text-lg sm:text-[18px] text-[#f2f2f2] mb-4 font-[Satoshi Light]'>Front-end Developer</p>
        <p className='text-[#f2f2f2]/70 text-[15px] w-full sm:w-[65%] mb-10 font-[Satoshi Light]'>I build inclusive products and create innovative solutions for digital problems.</p>
        <div className='flex items-center gap-2 text-[15px] mb-3'>
          <i className="ri-drag-move-line flex text-[15px] text-[#f2f2f2] font-[Satoshi Light]"></i><h1 className='text-[15px]'>About</h1>
        </div>
        <div className='flex items-center gap-2 text-[#603ae1]/70'>
          <i className="ri-drag-move-line"></i><h1 className='text-[15px] font-[Satoshi Light]'>Projects</h1>
        </div>
        
        <ul className='flex items-center gap-8 text-[12px] mt-6 sm:mt-20 uppercase font-[Satoshi Light]'>
        <a className='text-[#f2f2f2]/70 hover:text-[#f2f2f2]' target='_blank' href='mailto: munisabbas2003@gmail.com'>Email</a>
            <a className='text-[#f2f2f2]/70 hover:text-[#f2f2f2]' target='_blank' href="https://www.linkedin.com/in/munisabbas/">LinkedIn</a>
            <a className='text-[#f2f2f2]/70 hover:text-[#f2f2f2]' target='_blank' href="https://github.com/Munis2003">Github</a>
            <a className='text-[#f2f2f2]/70 hover:text-[#f2f2f2]' target='_blank' href="https://www.instagram.com/abbas.munis110/">Instagram</a>
        </ul>
      </div>

      <div className='sm:w-[50%] max-[900px]:mt-[-10%] relative'>
        <div className='w-full sm:w-[70%]'>
<div className='lg:hidden absolute left-[-5.1%] top-[-1.9%]  text-sm font-[300] text-[#f2f2f2]/30 mr-5'>{'<p>'} </div> 
          <p className='text-[#f2f2f2]/70 mb-2 font-[Satoshi Light]'>I specialize in designing and maintaining responsive websites that prioritize user satisfaction.</p>
          <p className='text-[#f2f2f2]/30 mb-2 font-[Satoshi Light]'>My passion lies in translating ideas into dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
          <p className='text-[#f2f2f2]/70 mb-10 sm:mb-20 font-[Satoshi Light]'>I strive to push the boundaries of web design to deliver seamless user experiences.</p> 
<div className='lg:hidden absolute left-[76%] top-[15%]  text-sm font-[300] text-[#f2f2f2]/30 mr-5'>{'<p>'} </div> 
        </div>

        {data.map((item, index) => {
          return (
            <div className='flex mb-10' key={index}>
              <div className='w-[120px] sm:w-[232px] h-[100px] sm:h-[150px] rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.img} alt={item.name} />
              </div>
              <div className='ml-5 w-[60%]'>
                <p className='text-[#f2f2f2] text-lg sm:text-[1.7vw] font-[Migra] tracking-wider'>{item.name}</p>
                <p className='text-[12px] text-[#f2f2f2]/70 w-full sm:w-[80%] mt-1 font-[Satoshi Light]'>{item.desc}</p>
                <div className='flex items-center text-[#f2f2f2] text-[15px] mt-3'>
                  <a target='_blank' rel='noopener noreferrer' href={item.link}>
                    <button className='flex items-center gap-3 border-[1.2px] border-[#f2f2f2]/30 py-1 rounded-3xl text-[#f2f2f2]/70 px-2 text-[14px] font-[Satoshi Light]'>View source code <i className="ri-github-fill text-[20px]"></i></button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPage;
