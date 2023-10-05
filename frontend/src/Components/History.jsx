import Navbar from './Navbar'
import { FaTrash } from 'react-icons/fa'
import { useState } from "react";
import {  useParams } from "react-router-dom";
import LineChart from './LineChart';

const transactions = [
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'}
]


function History() {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("pending");
    const { id } = useParams();

    function deleteTransaction(){
        fetch(`/history/${id}`, {method: "DELETE"})
            .then((r) => {
            if (r.ok) {
                return(r.status); 
            } else {
                throw new Error(`Error deleting restaurant: ${r.status}`);
            }
            })
            .catch((err) => {
            setError(err.message);
            setStatus("rejected");
            });
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
                        <button onClick={()=>deleteTransaction(tran)} className="bg-blue-400 p-3 rounded-lg custom-pulse animate-pulse"><FaTrash /></button>
                    </td>
                </tr>
            )
        })

  return (
    <>
        <Navbar/>
        <div className='m-20' >
            <h2 className='text-4xl'>Transaction History</h2>
            <section className='h-screen text-xl lg:text-3xl'>
                <div className="flex justify-center p-2">
                    <div className="table-container lg:w-full">
                        <table className="border-0 border-collapse w-full">
                            <thead className='lg:p-4 lg:m-12'>
                                <tr>
                                    <th className='underline'>Transactions</th>
                                    <th className='underline'>See All</th>
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
        </div>
        <LineChart/>
    </>
  )
}

export default History
