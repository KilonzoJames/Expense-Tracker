import { Link } from 'react-router-dom'
import { FaArrowUp, FaPlus } from 'react-icons/fa'
import {animateScroll} from 'react-scroll'
import TransactionForm from './TransactionForm'
import { useState } from 'react'

const links = [
    {to: 'Privacy Policy', name: 'Privacy Policy'},
    {to: 'Terms of Service', name: 'Terms of Service'},
    {to: 'Cookies Settings', name: 'Cookies Settings'},
    {to: 'Feedback', name: 'Feedback'}
]

function Footer() {
const [showForm, setShowForm] = useState(false);

const handleArrowClick = () => {
    setShowForm((prevState) => !prevState);
};

const handleSubmit = (transactionData) => {
    console.log('Transaction Data:', transactionData);
    setShowForm(false);
};

  return (
    <footer className='bg-zinc-900 text-white lg:w-full h-auto p-4 shadow-lg md:shadow-lg lg:shadow-xl'>
         <div 
         onClick={handleArrowClick}
         className="bg-purple-500 text-white rounded-full mx-auto p-3 w-16 h-16 text-4xl cursor-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
         style={{ position: 'fixed', left: '50%', bottom: '20px' }}
         >
            <FaPlus />
        </div>
        {showForm && 
        <div style={{ position: 'fixed', left: '0', bottom: '20px' }}
            > <TransactionForm onSubmit={handleSubmit} handleArrowClick={handleArrowClick}/>
        </div>
        }
        <div className="flex justify-center items-center">
            <ul 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2
                text-center pt-2 text-gray-400 text-md "           
                 >
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
        <div 
            className='arrow text-teal-400 text-5xl cursor-pointer' 
            style={{ position: 'fixed', right: '0', bottom: '20px' }}
            onClick={() => animateScroll.scrollToTop()
        }>
            <FaArrowUp />
        </div>
        <hr className='broken-hr'/>
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
            text-center text-gray-400 text-md"
         >
            <span className="self-center">&copy; {new Date().getFullYear()} </span>
            <span className="self-center">All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
