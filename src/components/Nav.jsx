import { BiChat, BiHomeAlt2, BiUser, BiBrain, BiTask } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/Nav.css';
import { fadeIn } from '../config/variants';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    className="nav__link"
                >
                    <NavLink 
                        to='/'
                        end
                        className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                    >
                        <BiHomeAlt2 />
                    </NavLink>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    className="nav__link"
                >
                    <NavLink 
                        to='/me'
                        className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                    >
                        <BiUser />
                    </NavLink>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    className="nav__link"
                >
                    <NavLink 
                        to='/skills'
                        className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                    >
                        <BiBrain />
                    </NavLink>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    className="nav__link"
                >
                    <NavLink 
                        to='/works'
                        className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                    >
                        <BiTask />
                    </NavLink>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1 }}
                    className="nav__link"
                >
                    <NavLink 
                        to='/contact'
                        className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                    >
                        <BiChat />
                    </NavLink>
                </motion.div>
            </div>
        </nav>
    );
};

export default Nav;