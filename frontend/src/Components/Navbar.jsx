import  { useState, useEffect, useContext } from 'react';
import SideNavbar from './SideNavbar'
import Navlinks from './Navlinks'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

function Navbar() {
const { isDarkMode, toggleTheme } = useContext(ThemeContext);
const [open, setOpen] = useState(true) 
const modeClass = isDarkMode ? 'light' : 'dark';

  return (
    <div>
        <div className={modeClass}>
            <nav className='navbar fixed top-0 left-0 w-full h-auto px-12 flex justify-between items-center shadow-md md:shadow-lg lg:shadow-xl'>
                <a href="/homepage" className='text-4xl font-bold p-4'>Home</a>
                <ul className="hidden lg:flex items-center text-2xl p-4">
                    <Navlinks/>
                </ul>
                <div className='icons lg:hidden flex items-center gap-10 text-4xl p-4'>
                    {open ? (
                    <FaBars onClick={() => setOpen(!open)} />
                    ) : (
                    <FaTimes onClick={() => setOpen(!open)} />
                    )}
                </div>
                <div className='text-4xl hover:scale-150 transition-all duration-500' onClick={toggleTheme}>
                        {isDarkMode ? <FaMoon/> : <FaSun />}
                </div>
            </nav>
        </div>
        <div className='small lg:hidden' style={{display: open?'none':'block'}}>      
            <SideNavbar/>
        </div>
    </div>
  )
}
export default Navbar
