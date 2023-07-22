import Navbar from '../navbar'
import './styles.css'
import { FaGithub, FaJava} from 'react-icons/fa'
// import { computerOne } from "../../assets/1-pc-hourcounter.png";

function ProjectModal(props: {bg_color: string}) {
    return (
        <>
            <Navbar text={'Ficha Técnica'} text_color_black={false} bg_color={props.bg_color}/>
            <div className='container'>
                <div className='display-img hour-counter-img'>
                    <p>Hour Counter</p>
                    <a href="https://github.com/BRUNO-FEVE/Hour-Counter" target={'_blank'} rel="noreferrer"><FaGithub className='github-icon'/></a>
                </div>  
                <FaJava className='background-icon'/>
            </div>
        </>
    )
}

export default ProjectModal