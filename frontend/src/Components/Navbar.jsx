import React, { useState } from 'react';
import SideNavbar from './SideNavbar'
import Navlinks from './Navlinks'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({isDarkMode, handleToggle}) {
const [open, setOpen] = useState(true) 

  return (
    <div>
        <div className={`header ${!isDarkMode ? 'light' : ''}`}>
            <nav className='navbar fixed top-0 left-0 w-full h-auto px-12 flex justify-between items-center bg-zinc-300'>
                <a href="#" className='text-4xl font-bold p-4'>Home</a>
                <ul className="hidden lg:flex items-center text-2xl p-4">
                    <Navlinks/>
                </ul>
                <div className='hidden lg:block text-4xl' onClick={handleToggle}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                </div>
                <div className='icons lg:hidden flex items-center gap-10 text-4xl'>
                    {open ? (
                    <FaBars onClick={() => setOpen(!open)} />
                    ) : (
                    <FaTimes onClick={() => setOpen(!open)} />
                    )}
                </div>
            </nav>
        </div>
        <div className='small' style={{display: open?'none':'flex'}}>      
            <SideNavbar/>
        </div>
    </div>
  )
}

export default Navbar
