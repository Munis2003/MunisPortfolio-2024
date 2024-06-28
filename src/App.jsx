import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Services from './components/Services';
import { Routes, Route } from 'react-router-dom';
import WorkPage from './components/WorkPage';
import MoreAboutMe from './components/MoreAboutMe';


const App = () => {
  return ( 
    <div className='w-full bg-[#212121] text-[#f8f8ff] font-[Satoshi Medium]'>
      <Navbar />
      <Routes>
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutme" element={<MoreAboutMe/>}/>
        <Route path="/" element={
          <div>
            <Homepage />
            <div className='bg-[#f2f2f2]'>
              <Project />
            </div>
            <Services />
              <Contact />
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
