import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import {animateScroll} from 'react-scroll'

const links = [
    {to: 'Privacy Policy', name: 'Privacy Policy'},
    {to: 'Terms of Service', name: 'Terms of Service'},
    {to: 'Cookies Settings', name: 'Cookies Settings'},
    {to: 'Feedback', name: 'Feedback'}
]

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full text-2xl h-auto bg-zinc-400 text-fuchsia-50'>
        <div>
            <ul className='flex justify-center my-2 p-2'>
                {
                    links.map((link, index) => {
                        return(
                            <li key={index} className='mx-4'>
                                <Link to = {link.to}>
                                    {link.name}
                                </Link>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
        <div className='arrow text-blue-700 text-5xl absolute right-0 top-0' onClick={() => animateScroll.scrollToTop()}>
            <FaArrowUp />
        </div>
        <hr className='broken-hr'/>
        <div className='my-2 p-2'>
            <div>
                <img/>
            </div>
            <p>
                &copy; {new Date().getFullYear()} All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer
