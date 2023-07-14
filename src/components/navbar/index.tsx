import "./styles.css"
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar(props: { text: string; }) {

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


    return (
        <motion.div className="navbar"
            initial={{opacity: 0, y: -200}}
            animate={{opacity: 1, y: 0}}
            transition={{
                ease: 'easeInOut',
                duration: 1.5, 
                delay: .1
            }}>
            <Link to={'/'} className='link'><p className="title">Coded & Desinged by Bruno</p></Link>
            <RxHamburgerMenu className="hamburguer-icon"/>
            <ul className="left-side">
                {linksList.map((link) => {
                    return (
                        <motion.li 
                            drag 
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                        }}>
                            <p>{link.text}</p>
                        </motion.li>)
                })}
            </ul>
        </motion.div>
    )
}

export default Navbar;