import { Link } from 'react-router-dom'
import { FaArrowUp, FaPlus } from 'react-icons/fa'
import {animateScroll} from 'react-scroll'

const links = [
    {to: 'Privacy Policy', name: 'Privacy Policy'},
    {to: 'Terms of Service', name: 'Terms of Service'},
    {to: 'Cookies Settings', name: 'Cookies Settings'},
    {to: 'Feedback', name: 'Feedback'}
]

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full text-2xl h-auto text-fuchsia-50 shadow-md md:shadow-lg lg:shadow-xl'>
         <div className="bg-purple-500 text-white rounded-full mx-auto p-3 w-16 h-16 text-4xl cursor-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaPlus />
        </div>
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
        <div className="my-2 p-2 relative text-center">
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
