// Libraries
import { Fragment } from 'react';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
            <motion.button whileHover={{scale: 1.2,
        transition: { duration: 0.2 }}}>
          <a href="/">Home</a>
        </motion.button>
              
            </li>

            <li>
            <motion.button whileHover={{scale: 1.2,
        transition: { duration: 0.2 }}}>
              <Link to="about" spy={true} smooth={true} offset={-50} duration={50} href="/">About</Link>
              </motion.button>
            </li>

            <li>
              <motion.button whileHover={{scale: 1.2,
        transition: { duration: 0.2 }}}>
              <Link to="projects" spy={true} smooth={true} offset={-50} duration={50} href="/">Projects</Link>
              </motion.button>
              </li>
            <li>
            <motion.button whileHover={{scale: 1.2,
        transition: { duration: 0.2 }}}>
              <a href="mailto: bmao2@student.holmesglen.edu.au">Contact</a>
              </motion.button>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
};

export default Header;