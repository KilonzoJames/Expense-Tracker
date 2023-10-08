import { NavLink } from 'react-router-dom'

function logoutUser() {
    // Remove the 'user_id' key from session storage to log the user out
    sessionStorage.removeItem('user_id');
    console.log('Logged out');
  }
  // export const useGetUserInfo = () => {
  //   const { name, profilePhoto, userID, isAuth } =
  //     JSON.parse(localStorage.getItem("auth")) || {};
  
  //   return { name, profilePhoto, userID, isAuth };
  // };        // className='lg:hidden'


function Navlinks() {
    return (
    <div>
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
        <div onClick={logoutUser} className='text-2xl mx-4 py-4 hover:scale-75 transition-all duration-500'>
            <NavLink to='/' className='hover:shadow-sm'>
                Log-out
            </NavLink>
        </div>
    </div>
  );
}
    
    export default Navlinks;