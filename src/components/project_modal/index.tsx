import Navbar from '../navbar'
import './styles.css'
import { FaGithub, FaJava, FaPager} from 'react-icons/fa'
import { TbBulbFilled } from 'react-icons/tb'
import { PiFileSqlFill } from 'react-icons/pi'

import IconComponent from '../little_components/icon-component'

// import { computerOne } from "../../assets/1-pc-hourcounter.png";

function ProjectModal(props: {bg_color: string}) {

    const iconsList = [
        {
            icon: TbBulbFilled,
            label: 'Tema Livre'
        },
        {
            icon: PiFileSqlFill,
            label: 'Conexão ao Banco de dados MySQL'
        },
        {
            icon: FaJava,
            label: 'Liguagem de Programação: Java'
        },
        {
            icon: FaPager,
            label: 'Interfaces Graficas'
        }
    ]

    return (
        <>
            <Navbar text={'Ficha Técnica'} text_color_black={false} bg_color={props.bg_color}/>
            <div className='container-display'>
                <div className='display-img hour-counter-img'>
                    <p>Hour Counter</p>
                    <a href="https://github.com/BRUNO-FEVE/Hour-Counter" target={'_blank'} rel="noreferrer"><FaGithub className='github-icon'/></a>
                </div>  
                <FaJava className='background-icon'/>
            </div>
            <div className="container-objective">
                <p className='objective-title'>Principais Objetivos:</p>
                <p className='objective-text'>O Hour Counter foi concebido como um projeto semestral da disciplina de Linguagens de Programação, com o intuito de atender a uma série de requisitos específicos. </p>
                <div className='objective-icon-list'>
                    {iconsList.map((icon) => {
                        return <div>
                            <IconComponent label={icon.label} icon={icon.icon} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ProjectModal