import { NavLink } from 'react-router-dom'
 
function Navlinks({onLogout}) {
function handleLogout() {
        fetch("https://expense-tracker-web-server.onrender.com/logout", { method: "DELETE",
            }).then(() => onLogout());
    }

    return (
    <div className="hidden lg:flex items-center p-4">
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
        <div onClick={handleLogout} className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/' className='hover:shadow-sm'>
                Log-out
            </NavLink>
        </div>
    </div>
  );
}
    
    export default Navlinks;