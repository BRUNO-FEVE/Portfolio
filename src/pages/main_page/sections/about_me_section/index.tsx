import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './about_me_section.css'


function AboutMeSection() {
    return (
        <>
            <div className='second-section'>
                <p className='main-phrase'>Dando emoção a simples displays. Juntos podemos criar interfaces de usuário incríveis e intuitivas que proporcionam uma experiência de usuário excepcional.</p>
                <div className='about-me'>
                    <p>Sou estudante de Engenharia da Computação no 3º ano no Instituto Mauá de Tecnologia em São Paulo. Tenho um grande interesse em desenvolvimento e design.</p>
                    <button>Sobre Mim<HiOutlineArrowLongRight className='arrow-icon'/></button>
                </div>
            </div>
        </>
    )
}

export default AboutMeSection;