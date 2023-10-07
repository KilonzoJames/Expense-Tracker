import { FaTrash, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

function TableData() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/transactions')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setTransactions(data);
          })
          .catch((error) => {
            console.error('Error fetching transactions:', error);
          });
      }, []);
    
      function deleteTransaction(tran) {
        fetch(`/transaction/${tran.id}`, { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
                // Request was successful
                return r.json({message: 'fulfilled'});
            } else {
                // Request returned an error status (e.g., 404 or 500)
                throw new Error(`Error deleting transaction: ${r.status}`);
            }
        })
          .catch(() => {console.log("rejected");
          });
      }
    return (
        <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
                transactions.map((tran, index) => (
                    <tr key={index} className='p-8 m-24'>
                        <td className='gap-4 mx-4'> {tran.description} </td>
                        <td className='gap-4 mx-4'> {tran.amount} </td>
                        <td className='gap-4 mx-4'> {tran.timestamp} </td>           
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
                            onClick={()=>{deleteTransaction(tran);console.log(tran.id)}} 
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