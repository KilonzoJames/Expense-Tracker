import { FaTrash, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react';

function TableData({deleteTransaction}) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/transactions')
          .then((response) => response.json())
          .then((data) => {
            setTransactions(data);
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
      }, []);
    return (
        <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
                transactions.map((tran, index) => (
                    <tr key={index} className='p-8 m-24'>
                        <td className='gap-4 mx-4'> {tran.name} </td>
                        <td className='gap-4 mx-4'> {tran.amount} </td>
                        <td className='gap-4 mx-4'> {tran.date} </td>           
                        <td>
                            <button
                                // onClick={UpdateTran}
                                className='border animate-bounce border-green-950 rounded-md cursor-pointer hover:text-white p3-4 mx-2 '
                                >  {' '}
                                <FaEdit/>
                            </button>
                        </td>
                        <td>
                            <button 
                            onClick={()=>deleteTransaction(tran)} 
                            className="bg-blue-400 p-3 rounded-lg custom-pulse animate-pulse"
                            >
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                <td colSpan="5">No transactions available.</td>
                </tr>
            )}
            </tbody>
        );
        }

export default TableData