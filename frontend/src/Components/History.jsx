import Navbar from './Navbar'
import { FaTrash } from 'react-icons/fa'

const transactions = [
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'}
]
function deleteBot(orderToDelete){
    const orderArray=transactions.filter((order)=>orderToDelete!==order)
    deleteMethod(orderToDelete)
    .then(() => {
      setOrders(orderArray);
    })
    }
function deleteMethod(order){
    const url=`https://server-dvs6.onrender.com/orders/${order.id}`;
    const method={
      method: "DELETE"
    }
    return fetch(url, method)
    .then(data=>data)
  }
const tableData = transactions.map((tran, index) => {
    return (
        <tr key={index} className='p-8 m-24'>
            <td className='gap-4 mx-4'>
                {tran.name}
            </td><td className='gap-4  mx-4'>
                {tran.amount}
            </td>
            <td className='gap-4  mx-4'>
                {tran.date}
            </td>
            <td>
                <button onClick={()=>deleteBot(tran)} className="bg-blue-400 p-3 rounded-lg custom-pulse animate-pulse"><FaTrash /></button>
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
                    <div className="table-container lg:w-full">
                        <table className="w-full lg:w-max">
                            <thead className='font-bold underline lg:p-4 lg:m-12'>
                                <tr>
                                    <th>Transactions</th>
                                    <th>See All</th>
                                    </tr>
                                    <tr>
                                    <th scope="col">Transaction</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Timestamp</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>{tableData}</tbody>
                        </table>
                    </div>
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
