import Navbar from '../navbar'
import './styles.css'
import { FaGithub } from 'react-icons/fa'
import { ReactNode } from 'react'

// import { computerOne } from "../../assets/1-pc-hourcounter.png";

function ProjectModal(props: {bg_color: string, bgImg: ReactNode, iconList?: ReactNode, languageIcon: ReactNode, objectiveText: string, }) {
    return (
        <div className={props.bg_color}>
            <Navbar text={'Ficha Técnica'} text_color_black={false} bg_color={props.bg_color}/>
            <div className='container-display'>
                {props.bgImg} 
                {props.languageIcon}
            </div>
            <div className="container-objective">
                <p className='objective-title'>Principais Objetivos:</p>
                <p className='objective-text'>{props.objectiveText}</p>
                <div className='objective-icon-list'>{props.iconList}</div>
            </div>
        </div>
    )
}

export default ProjectModal