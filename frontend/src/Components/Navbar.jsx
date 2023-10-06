import  { useState } from 'react';
import SideNavbar from './SideNavbar'
import Navlinks from './Navlinks'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navbar({isDarkMode, handleToggle}) {
const [open, setOpen] = useState(true) 

  return (
    <div>
        <div className={`header ${!isDarkMode ? 'light' : 'dark'}`}>
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
                <div className='text-4xl hover:scale-150 transition-all duration-500' onClick={handleToggle}>
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
Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // Example: isDarkMode should be a boolean and is required
    handleToggle: PropTypes.func.isRequired, // Example: handleToggle should be a function and is required
  };
export default Navbar
