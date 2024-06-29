import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowSvg from '../assets/arrow.svg'
import AboutMeSvg from '../assets/ABOUTME.svg'
import Plus from '../assets/plus.svg'


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      id: 1,
      title: 'Design',
      description: `A solid foundation is vital for every project. I create stunning and user-friendly designs that reflect your brand's core values. Usability and aesthetics together lead to superior products.`
    },
    {
      id: 2,
      title: 'Development',
      description: 'Utilizing advanced web technologies, I create pixel-perfect, swift, and accessible websites. My focus on creative interactions and transitions is supported by expertise in React and advanced design techniques.'
    },
    {
      id: 3,
      title: 'Design & Dev',
      description: 'This service is my top choice because it ensures a seamless and ultra-fast website creation process, from initial concept to the final site.'
    }
  ];

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-14 max-[900px]:px-[1em] relative'>
        <div className=''>
        <div className='max-[900px]:mt-8'>
          <h1 className='absolute lg:left-[91.8%] top-[7%] max-[900px]:top-0 max-[900px]:left-[87.1%] uppercase text-[12px] max-[900px]:text-[7px] font-[Satoshi Light] text-[#f2f2f2]/70 '>What I <span className='italic text-[14px] max-[900px]:text-[9px] text-[#603ae1]/70 font-[Migra] font-[400]'> do</span></h1>
            {/* <h1 className='uppercase text-[12px] text-[#f2f2f2]/70 pt-32 font-[Satoshi Light] '>What do i <span className='text-[14px] text-[#603ae1]/70 font-[Migra] font-[400] italic'>offer</span></h1> */}
          </div>
          <p className='pt-40 max-[900px]:pt-5 text-[#ffffff] text-[3.3vw] w-[60%]  leading-[120%] pb-8 max-[900px]:pb-3 font-[Satoshi Light]'>
            Delivering <span className='font-[Migra] font-[400] italic '>modern, unified </span>&<span className='font-[Migra] font-[400] italic'> intuitive</span> web solutions.
          </p>
          
          {services.map((service, index) => (
            <div key={service.id} className='w-[100%]'>
              <div
                className={`flex w-[100%] items-center justify-between mt-12 max-[900px]:mt-5 cursor-pointer pb-5 max-[900px]:pb-5 font-[Satoshi Light]  ${activeIndex === index ? '' : 'border-b'}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className='flex gap-24 max-[900px]:gap-3'>
                  <h1 className='font-[Migra] font-[400] text-[2.5vw]'>{service.id.toString().padStart(2, '0')}/</h1>
                  <h1 className='text-[2.5vw] font-[300] font-[Satoshi Light]'>{service.title}</h1>
                </div>
                <h1 className='text-[2.5vw] font-[Satoshi Light] '>{activeIndex === index ? <i className="ri-subtract-line font-[100] text-[25px] max-[900px]:text-[10px] max-[900px]:text-[#f2f2f2]/70 "></i> : <img className='w-[16px] rotate-[135deg] max-[900px]:w-[10px]' src={Plus} alt="" /> }</h1>
              </div>
              {activeIndex === index && (
                <div>
                  <div className='mt-4'>
                    <h1 className='text-[16px] max-[900px]:text-[7px] max-[900px]:ml-[6.2%] max-[900px]:font-[300] max-[900px]:mt-[-6%] w-[70%] max-[900px]:w-[85%] ml-[12%] mt-[-1%] font-[Satoshi Light]'>{service.description}</h1>
                  </div>
                </div>
              )}
            </div>
          ))} 
        </div>

        <div className='flex items-center justify-between mt-10 mb-40 max-[900px]:mb-8 gap-4'>
          <h1 className='text-[19px] w-[40%] font-[Satoshi Light] mt-7 max-[900px]:mt-[-10%] font-[300] max-[900px]:text-[7px] max-[900px]:w-[50%] '>I find joy in creating meaningful experiences tailored for brands and businesses, enabling them to effectively engage and serve their target users with genuine impact and resonance.</h1>
<div className='flex  items-center'>
</div>
<Link to="/aboutme" className="inline-block" onClick={()=>window.scrollTo(0,0 )}>
      <div className="flex items-center justify-center rotate-[-120deg] border-2 w-20 h-20 mt-10 max-[900px]:mt-0 p-5 rounded-full transition-opacity duration-300 ease-in-out hover:opacity-90 hover:border-0">
        <img className="w-6 h-6 " src= {ArrowSvg} alt="arrow" />
        <img src={AboutMeSvg} alt="About me badge" className="badge"></img>
      </div>
    </Link>
   

        </div>
      </div>
    </>
  );
}

export default Services;