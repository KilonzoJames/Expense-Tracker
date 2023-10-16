import  { useState, useEffect } from 'react';
import Navlinks from './Navlinks'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import { NavLink } from "react-router-dom";

function Navbar({onLogout}) {
const { isDarkMode, toggleTheme } = useTheme();
const [open, setOpen] = useState(false) 
const modeClass = isDarkMode ? 'dark' : 'light';

useEffect(() => {
    document.body.className = modeClass; // Apply the modeClass to the body element
  }, [modeClass]);
  
  return (    
    <div>
        <div className={modeClass}>
            <nav className='navbar fixed top-0 left-0 w-full h-auto px-12 flex justify-between items-center shadow-md md:shadow-lg lg:shadow-xl'>
                <NavLink to="/history" className='text-4xl font-bold p-4'>Home</NavLink>
                <div  className="hidden lg:flex items-center p-4">
                    <Navlinks onLogout={onLogout}/>
                </div>                   
                <div className='icons lg:hidden flex items-center gap-10 text-4xl p-4' onClick={() => setOpen(!open)}>
                    {open ? (
                    <FaTimes />
                    ) : (
                    <FaBars />
                    )}
                </div>
                <div className='text-4xl hover:scale-150 transition-all duration-500' onClick={toggleTheme}>
                        {isDarkMode ? <FaMoon/> : <FaSun />}
                </div>
            </nav>
        </div>
        <div     
        className={`lg:hidden bg-slate-400 text-white w-1/2 h-screen lg:h-full gap-24 overflow-y-hidden text-2xl ${open ? 'block' : 'hidden'}`}
        >   
            <Navlinks onLogout={onLogout}/>
        </div>
    </div>
  )
}
export default Navbar
