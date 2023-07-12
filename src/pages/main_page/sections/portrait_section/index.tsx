import portrait from '../../../../assets/retrato-sem-fundo.png'
import Marquee from 'react-fast-marquee';
import './portrait_section.css'

function PortraitSection() {
    return (
        <>
            <div className='first-section'>
                <div className='background-text'>
                    <p>Estudante <br/> Engenharia de Computação & Front End</p>
                    <p>Localizado na Zona Sul de São Paulo</p>
                </div>
                <Marquee className='marquee'><h1>Bruno Fevereiro</h1></Marquee>
                <img src={portrait} alt="Bruno Fevereiro"/>
            </div>
        </>
    )
}


export default PortraitSection;