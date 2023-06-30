import React from 'react';
import './main_page.css';
import NavBar from '../../components/navbar/index';
import img from '../../assets/retrato-sem-fundo.png'

function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <div className='first-section'>
        <div className='background-text'>
          <p>Estudante <br/> Engenharia de Computação & Front End</p>
          <p>Localizado na Zona Sul de São Paulo</p>
        </div>
        <figure>
          <img src={img} alt='Bruno Fevereiro' />
        </figure>
      </div>
    </>
  );
}

export default main_page;
