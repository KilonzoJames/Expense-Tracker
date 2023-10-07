import { FaTrash, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import Update from './Update';

function TableData() {
    const [transactions, setTransactions] = useState([]);
    // const [isFormVisible, setFormVisible] = useState(false);
    // const toggleFormVisibility = () => {
    //   setFormVisible(!isFormVisible);
    // };
    const [visibleFormId, setVisibleFormId] = useState(null);

    const toggleFormVisibility = (id) => {
      if (visibleFormId === id) {
        setVisibleFormId(null);
      } else {
        setVisibleFormId(id);
      }
    };

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
        return fetch(`http://127.0.0.1:5555/transaction/${tran.id}`, { method: "DELETE" })
         .then(r => {
          console.log(r);           
           if (r.ok) {
                // Request was successful
                return r.json({message: 'fulfilled'});
            } else {
                // Request returned an error status (e.g., 404 or 500)
                throw new Error(`Error deleting transaction: ${r.status}`);
            }
        }).then(r=>console.log(r))
          .catch(() => {console.error("rejected"); 
          });
      }
    return (
        <tbody className='tbody'>
            {Array.isArray(transactions) && transactions.length > 0 ? (
                transactions.map((tran, index) => (
                    <tr key={index} className='p-8 m-24'>
                        <td className='gap-4 mx-4'> {tran.description} </td>
                        <td className='gap-4 mx-4'> {tran.amount} </td>
                        <td className='gap-4 mx-4'> {tran.timestamp} </td>           
                        <td>
                            <button
                                onClick={() => toggleFormVisibility(tran.id)}
                                className='border animate-bounce border-green-950 rounded-md cursor-pointer hover:text-white p3-4 mx-2 '
                                >  {' '}
                                <FaEdit/>
                            </button >
                            {visibleFormId === tran.id && (
                                <div 
                                className="hover:text-red-500 rounded-full mx-auto p-3 w-16 h-16 text-4xl cursor-pointer fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                >
                                    <Update/>
                                </div>
                            )}
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