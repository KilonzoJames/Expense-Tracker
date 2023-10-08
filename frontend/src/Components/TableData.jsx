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
    <div className="transaction-list flex flex-wrap text-grey-200">
      {Array.isArray(transactions) && transactions.length > 0 ? (
        transactions.map((tran, index) => (
          <div key={index} className="specific border-2 border-cyan-400 rounded-lg m-auto lg:p-4 " style={{ width: '200px', height: '200px' }}>
             <div className="grid grid-cols-2 gap-4">
                {/* First Row */}
                <div className="transaction-item">
                  <div className="transaction-label">Description:</div>
                  <div className="transaction-value">{tran.description}</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-label">Amount:</div>
                  <div className="transaction-value">{tran.amount}</div>
                </div>
                {/* Second Row */}
              <div className="grid grid-cols-1">
                <div className="transaction-item">
                  <div className="transaction-label">Timestamp:</div>
                  <div className="transaction-value">{tran.timestamp}</div>
                </div>
                </div> 
              </div> 

                   {/* Third Row */}
              <div className="grid grid-cols-2">
                <div className="transaction-item">
                  <button
                    onClick={() => toggleFormVisibility(tran.id)}
                    className="element-to-spin-on-hover rounded-md cursor-pointer hover:text-white p-4 mx-2"
                  >
                    {' '}
                    <FaEdit />
                  </button>
                  {visibleFormId === tran.id && (
                    <div
                      className="text-red-600 hover:text-red-500"
                      style={{ position: 'fixed', left: '0', bottom: '20px' }}
                    >
                      <Update tran={tran} />
                    </div>
                  )}
                </div>
                <div className="transaction-item">
                  <button
                    onClick={() => {
                      deleteTransaction(tran);
                      console.log(tran.id);
                    }}
                    className="bg-blue-400 p-3 rounded-lg custom-pulse animate-pulse"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
          </div>
        ))
      ) : (
        <div className="no-transactions">No transactions available.</div>
      )}
    </div>
  );
  }

export default TableData