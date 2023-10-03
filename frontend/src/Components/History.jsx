import React from 'react'
import Navbar from './Navbar'

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
function History() {
  return (
    <>
        <Navbar/>
        <div >
            <h2 className='text-4xl'>Overview</h2>
            <section className='h-screen text-xl lg:text-3xl'>
            <div className="flex justify-center p-16">
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
            <div>
                Statistics
                Graph Data
            </div>
        </div>
    </>
  )
}

export default History
