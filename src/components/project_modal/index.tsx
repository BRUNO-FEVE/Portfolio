import Navbar from '../navbar'
import './styles.css'

function ProjectModal(props: {bg_color: string}) {
    return (
        <>
            <Navbar text={'Projects'} text_color_black={false} bg_color={props.bg_color}/>
            <div className='container'>

            </div>
        </>
    )
}

export default ProjectModal