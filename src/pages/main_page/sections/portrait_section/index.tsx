import portrait from '../../../../assets/retrato-sem-fundo.png'
import Marquee from 'react-fast-marquee';
import './styles.css'

function PortraitSection() {
    return (
        <>
            <div className='first-section'>
                <p className='mobile-student'>Estudante <br/> Engenharia de Computação & Front End</p>
                <div className='background-text'>
                    <p>Estudante <br/> Engenharia de Computação & Front End</p>
                    <p className='web-loc'>Localizado na Zona Sul de São Paulo</p>
                </div>
                <Marquee className='marquee'><h1>Bruno Fevereiro</h1></Marquee>
                <p className='mobile-loc'>Localizado na <br /> Zona Sul de São Paulo</p>
                <img src={portrait} alt="Bruno Fevereiro" className='portrait'/>
            </div>
        </>
    )
}


export default PortraitSection;