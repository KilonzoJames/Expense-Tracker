import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

function SideNavBar({open}) {
  return (
    <div   
    className={`lg:hidden bg-slate-400 text-white w-1/2 h-screen lg:h-full gap-24 overflow-y-hidden text-2xl ${open ? 'block' : 'hidden'}`}>
        <div className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/history' className='hover:shadow-sm'>
                Home
            </NavLink>
        </div>
        <div className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/homepage' className='hover:shadow-sm'>
                Stats
            </NavLink>
        </div>
        <div className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/' className='hover:shadow-sm'>
                Log-out
            </NavLink>
        </div>
    </div>
  )
}

export default SideNavBar
SideNavBar.propTypes = {
    open: PropTypes.string,
  };