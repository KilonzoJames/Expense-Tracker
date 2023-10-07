import { NavLink } from 'react-router-dom'

function logoutUser() {
    // Remove the 'user_id' key from session storage to log the user out
    sessionStorage.removeItem('user_id');
    console.log('Logged out');
  }

function Navlinks() {
    return (
    <ul className="hidden lg:flex items-center text-2xl p-4">
        <li className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/history' className='hover:shadow-sm'>
              Home
          </NavLink>
        </li>
        <li className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/homepage' className='hover:shadow-sm'>
              Stats
            </NavLink>
        </li>
        <li onClick={logoutUser} className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/' className='hover:shadow-sm'>
             Log-out
            </NavLink>
        </li>
    </ul>
      );
    }
    
    export default Navlinks;