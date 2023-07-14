import React from 'react';
import './styles.css';
import NavBar from '../../components/navbar/index';
import PortraitSection from './sections/portrait_section/index';
import AboutMeSection from './sections/about_me_section/index'
import ProjectsSection from './sections/projects_section/index'
import Footer, {  } from "../../components/footer/index";

function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <PortraitSection />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default main_page;
