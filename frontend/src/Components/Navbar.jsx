import {React, useState, useEffect} from 'react'
import SideNavbar from './SideNavbar'
import Navlinks from './Navlinks'

function Navbar() {
const [open, setOpen] = useState(true)
useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768); // Assuming the medium breakpoint is 768px
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="relative">
        {open? 
        <nav className='navbar fixed top-0 left-0 w-full h-auto px-12 flex justify-between items-center bg-zinc-300'>
            <a href="#" className='text-4xl font-bold p-4'>Home</a>
            <ul className="hidden lg:flex items-center text-2xl p-4">
                <Navlinks/>
            </ul>
        </nav> :
        <SideNavbar/>}
    </div>
  )
}

export default Navbar
