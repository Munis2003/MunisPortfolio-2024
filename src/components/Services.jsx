import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className='max-w-screen-xl mx-auto px-14 relative'>
        <div className='w-[100%]'>
        <div className='absolute left-[87.1%]'>
            <h1 className='uppercase text-[12px] text-[#f2f2f2]/70 pt-32 font-[satoshi] '>What do i <span className='text-[14px] text-[#603ae1]/70 font-[Migra] font-[400] italic'>offer</span></h1>
          </div>
          <p className='pt-40 text-[#ffffff] text-[3.3vw] w-[60%]  leading-[120%] pb-8 font-[satoshi]'>
            Delivering <span className='font-[Migra] font-[400] italic '>modern, unified </span>&<span className='font-[Migra] font-[400] italic'> intuitive</span> web solutions.
          </p>
          
          {services.map((service, index) => (
            <div key={service.id} className='w-[100%]'>
              <div
                className={`flex w-[100%] items-center justify-between mt-12 cursor-pointer pb-5 font-[satoshi]  ${activeIndex === index ? '' : 'border-b'}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className='flex gap-24'>
                  <h1 className='font-[Migra] font-[400] text-[2.5vw]'>{service.id.toString().padStart(2, '0')}/</h1>
                  <h1 className='text-[2.5vw] font-[300] font-[satoshi]'>{service.title}</h1>
                </div>
                <h1 className='text-[2.5vw] font-[satoshi] '>{activeIndex === index ? <i className="ri-subtract-line font-[100] text-[25px]"></i> : <i className="ri-add-line font-[100] text-[25px]"></i>}</h1>
              </div>
              {activeIndex === index && (
                <div>
                  <div className='mt-4'>
                    <h1 className='text-[16px] w-[70%] ml-[12%] mt-[-1%] font-[satoshi]'>{service.description}</h1>
                  </div>
                  <div className='border-b pb-7'></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex items-center justify-between mt-10 mb-40 gap-4'>
          <h1 className='text-[19px] w-[40%] font-[satoshi]  mt-7'>I find joy in creating meaningful experiences tailored for brands and businesses, enabling them to effectively engage and serve their target users with genuine impact and resonance.</h1>
<div className='flex  items-center'>
</div>
<Link to="/aboutme" className="inline-block" onClick={()=>window.scrollTo(0,0 )}>
      <div className="flex items-center justify-center rotate-[-120deg] border-2 w-20 h-20 mt-10 p-5 rounded-full transition-opacity duration-300 ease-in-out hover:opacity-90 hover:border-0">
        <img className="w-6 h-6" src="./images/arrow.svg" alt="arrow" />
        <img src="./images/AboutMe.svg" alt="About me badge" class="badge"></img>
      </div>
    </Link>
   

        </div>
      </div>
    </>
  );
}

export default Services;