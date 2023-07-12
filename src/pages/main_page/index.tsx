import React from 'react';
import './main_page.css';
import NavBar from '../../components/navbar/index';
import PortraitSection from './sections/portrait_section';
import AboutMeSection from './sections/about_me_section'


import { HiOutlineArrowLongRight } from 'react-icons/hi2'


function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <PortraitSection />
      <AboutMeSection />
      
      <div className='third-section'>
          <p>Últimos Projetos: </p>
          <div className='projects-boxes'>
            <div className='first-box'><p>Hackathon Back-End</p></div>
            <div className='second-box'>
              <div className='hour-counter-logo'>
                {/* <div className='big-pointer pointer'></div>
                <div className='small-pointer pointer'></div> */}
              </div>
              <p>Hour Counter</p>
            </div>
            <div className='third-box'></div>
          </div>
      </div>
    </>
  );
}

export default main_page;
