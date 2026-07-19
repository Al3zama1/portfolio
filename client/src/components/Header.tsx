import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

function Header() {
  const location = useLocation()

  return (
      <motion.header initial={{opacity: 0, y: -48}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7,ease: 'easeOut'}}
       className='flex justify-center items-center bg-card border-border border backdrop-blur-[20px] px-8 py-2 min-h-16 sticky top-0'>
        <nav className='text-muted-foreground '>
          <ul className='flex flex-wrap gap-x-8 gap-y-2'>
            <li>
              <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-primary' : 'hover:text-foreground'}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-primary' : 'hover:text-foreground'}`}>About</NavLink>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </motion.header>
  )
}

export default Header