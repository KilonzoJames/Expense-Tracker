import { NavLink } from 'react-router-dom'


const links = [
    {to: '/homepage', name: 'Home'},
    {to: '/history', name: 'History'},
    {to: '/', name: 'Log-out'},
]
function Navlinks() {
  return (
        links.map((link, index) => {
            return(
                <li key={index} className='mx-4 py-4 hover:scale-75 transition-all duration-500'>
                    <NavLink 
                    to={link.to} 
                    className='hover:bg-blue-900 hover:shadow-md'                     >
                        {link.name}
                    </NavLink>
                </li>
            )
        })
  )
}

export default Navlinks
