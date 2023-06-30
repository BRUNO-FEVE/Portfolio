import React from 'react';
import './main_page.css';
import NavBar from '../../components/navbar/index';
import img from '../../assets/retrato-sem-fundo.png'
import Marquee from 'react-fast-marquee';

function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <div className='first-section'>
        <div className='background-text'>
          <p>Estudante <br/> Engenharia de Computação & Front End</p>
          <p className='location'>Localizado na Zona Sul de São Paulo</p>
        </div>
        <Marquee className='test'><h1>Bruno Fevereiro-</h1></Marquee>
          <img src={img} alt="Bruno Fevereiro"/>
      </div>
    </>
  );
}

export default main_page;
