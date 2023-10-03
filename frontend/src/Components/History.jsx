import React from 'react'

const divs = [
    {name: 'Total Income', amount: 2000, color: 'bg-green-400' },
    {name: 'Total Expenses', amount: 1000, color: 'bg-green-300' },
]
function History() {
  return (
    <>
        <div >
            <h2 className='text-4xl'>Overview</h2>
            <ul className="flex flex-wrap justify-center gap-4 mx-4">
                {divs.map((div, index) => {
                    return (
                        <li key={index} className="border border-zinc-950 rounded-md cursor-pointer hover:text-white-600 py-4 w-[12rem] transition-all duration-400">{div.name}
                        <br/>
                        {div.amount}
                        </li>
                    )
                } )}
            </ul>
            <div>
                Statistics
                Graph Data
            </div>
        </div>
    </>
  )
}

export default History
