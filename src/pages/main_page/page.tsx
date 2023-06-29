import React from 'react';
import './main_page.css';
import NavBar from '../../components/navbar/index';

function main_page() {
  return (
    <>
      <NavBar text="Projetos"/>
      <div className='first-section'>
        <div className='background-text'>
          <p>Estudante <br/> Engenharia de Computação & Front End</p>
          <p>Localizado na Zona Sul de São Paulo</p>
        </div>

      </div>
    </>
  );
}

export default main_page;
