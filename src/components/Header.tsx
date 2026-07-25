import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-card glass'>
        <nav className='max-w-6xl mx-auto px-6 p-4'>
            <ul className='flex justify-center gap-4'>
                <li>
                    <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-primary bg-primary/6' : 'hover:text-foreground'} px-3 py-1.5 rounded-lg text-sm`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-primary bg-primary/6' : 'hover:text-foreground'} px-2 py-1 rounded-lg text-sm`}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/Projects' className={({ isActive }) => `${isActive ? 'text-primary bg-primary/6' : 'hover:text-foreground'} px-2 py-1 rounded-lg text-sm`}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-primary bg-primary/6' : 'hover:text-foreground'} px-2 py-1 rounded-lg text-sm`}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header