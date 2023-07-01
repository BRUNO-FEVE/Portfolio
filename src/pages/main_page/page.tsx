import React from 'react';
import './main_page.css';
import NavBar from '../../components/navbar/index';
import img from '../../assets/retrato-sem-fundo.png'
import Marquee from 'react-fast-marquee';
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <div className='first-section'>
        <div className='background-text'>
          <p>Estudante <br/> Engenharia de Computação & Front End</p>
          <p>Localizado na Zona Sul de São Paulo</p>
        </div>
          <Marquee className='marquee'><h1>Bruno Fevereiro</h1></Marquee>
          <img src={img} alt="Bruno Fevereiro"/>
      </div>
      <div className='second-section'>
        <p className='main-phrase'>Dando emoção a simples displays. Juntos podemos criar interfaces de usuário incríveis e intuitivas que proporcionam uma experiência de usuário excepcional.</p>
        <div className='about-me'>
          <p>Sou estudante de Engenharia da Computação no 3º ano no Instituto Mauá de Tecnologia em São Paulo. Tenho um grande interesse em desenvolvimento e design.</p>
          <button>Sobre Mim<HiOutlineArrowLongRight className='arrow-icon'/></button>
        </div>
      </div>
    </>
  );
}

export default main_page;
