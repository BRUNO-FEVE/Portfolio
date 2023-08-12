import "./styles.css"
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useFollowPointer } from "../little_components/use-follow-pointer";

function Navbar(props: { text: string; text_color_black: boolean; bg_color: string}) {
    // const ref = useRef(null)
    // const {x, y} = useFollowPointer(ref)
    const [ onProjects, setOnProjects ] = useState(false)
    // const [ isHovered, setHovered ]= useState(false)

    const linksList = [
        {
            id: 1,
            text: props.text,
            url: '',
        },
        {
            id: 2,
            text: 'Sobre Mim',
            url: '',
        },
        {
            id: 3,
            text: 'Contato',
            url: '',
        },
    ];

    // const handleHover = () => {
    //     setHovered(!isHovered)
    // }

    useEffect(() => {
        if (props.text === 'Ficha Técnica') {
            setOnProjects(true)
        }
    }, [props.text])

    return (
        <motion.div className={"navbar " + props.bg_color}
            initial={{opacity: 0, y: -200}}
            animate={{opacity: 1, y: 0}}
            transition={{
                ease: 'easeInOut',
                duration: 1.5, 
                delay: .1
            }}>
            <Link to={'/'} className='link home'><p className={props.text_color_black ? 'title black' : 'title white'} >Coded & Desinged by Bruno</p></Link>
            <RxHamburgerMenu className={props.text_color_black ? 'hamburguer-icon black' : 'hamburguer-icon white'} key={""}/>
            <ul className="right-side">
                {linksList.map((link) => {
                    return (
                        <motion.li 
                            // onMouseEnter={handleHover}
                            // onMouseLeave={handleHover}
                            // ref={ref}
                            // animate={isHovered ? { x , y } : ''}
                            drag 
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                        }}>
                            <motion.p 
                            id={ onProjects && link.id === 1  ? 'yellow' : '' } 
                            className={props.text_color_black ? 'black' : 'white'}
                            >
                                {link.text}
                            </motion.p>
                        </motion.li>)
                })}
            </ul>
        </motion.div>
    )
}

export default Navbar;