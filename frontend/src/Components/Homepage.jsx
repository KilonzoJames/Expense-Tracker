import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const transactions = [
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'}
]
const tableData = transactions.map((tran, index) => {
        return (
            <tr key={index} className='p-8 m-24'>
                <td className='gap-4 '>
                    {tran.name}
                </td><td className='gap-4'>
                    {tran.amount}
                </td>
                <td className='gap-4'>
                    {tran.date}
                </td>
            </tr>
        )
    })
function Homepage() {
  return (
    <>
        <Navbar/>
        <main className='flex items-center justify-center my-12'>
            <div className='main border-sky-500 cursor-pointer w-96 h-80 shadow-2xl p-6  mx-auto my-12 bg-zinc-100'>
                <div className='relative left-0 w-full h-1/2 '>
                    <span className='absolute left-0 top-5 text-2xl'>Total Balance</span> 
                    <span className='text-sm absolute right-4 top-2'>KSH</span>
                    <br/>
                    <span className='text-4xl absolute left-8 bottom-4'>$4400.00</span>
                </div>
                <div className='flex justify-center h-1/2 text-2xl'>
                    <div className='flex items-center w-1/2'>&#128737; Income</div>
                    <div className='flex items-center w-1/2'>&#9889;Expenses</div>
                </div>
            </div>
        </main>
        <section className='h-screen text-xl lg:text-3xl'>
            <div className="flex justify-center p-16 gap-12">
                <table>
                    <thead className='font-bold underline lg:p-4 lg:m-12'>
                        <tr>
                            <th>Transactions</th>
                            <th>See All</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Homepage
