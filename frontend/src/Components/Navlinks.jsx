import React from 'react'
import { NavLink } from 'react-router-dom'


const links = [
    {to: '/signup', name: 'Sign-Up'},
    {to: '/history', name: 'History'},
    {to: '/', name: 'Log-out'},
]
function Navlinks() {
  return (
        links.map((link, index) => {
            return(
                <li key={index} className='mx-4 py-4'>
                    <NavLink to={link.to}>
                        {link.name}
                    </NavLink>
                </li>
            )
        })
  )
}

export default Navlinks
