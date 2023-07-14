import { Link } from 'react-router-dom';
import './styles.css'


function ProjectsSection() {
    return (
        <>
            <div className='third-section'>
                <p>Últimos Projetos: </p>
                <div className='projects-boxes'>
                    <div className='first-box'><p>Hackathon Back-End</p></div>
                        <div className='second-box'>
                            <Link to={'/hour-counter'} className='link'>
                                <div className='second-box'>
                                    <div className='hour-counter-logo'>
                                        {/* <div className='big-pointer pointer'></div>
                                        <div className='small-pointer pointer'></div> */}
                                    </div>
                                    <p className='teste'>Hour Counter</p>
                                </div>
                            </Link>
                        </div>
                    <div className='third-box'></div>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection;