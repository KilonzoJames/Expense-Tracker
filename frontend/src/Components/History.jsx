import Navbar from './Navbar'
import Name from './Name';
import TableData from './TableData';
import Footer from './Footer';
import { useState } from "react";
import {  useParams } from "react-router-dom";
import PropTypes from 'prop-types';
// import LineChart from './LineChart';


function History({username, isDarkMode, handleToggle}) {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("pending");
    const { id } = useParams();

    function deleteTransaction(){
        fetch(`/transaction/${id}`, {method: "DELETE"})
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
  return (
    <>
        <Navbar isDarkMode={isDarkMode} handleToggle={handleToggle}/>
        <Name username={username} />
        <div className='m-20' >
            <h2 className='text-4xl'>Transaction History</h2>
            <section className='h-screen text-xl lg:text-3xl'>
                <div className="flex justify-center p-2">
                    <div className="table-container lg:w-full">
                        <table className="border-0 border-collapse w-full">
                            <thead className='lg:p-4 lg:m-12'>
                                <tr>
                                    <th scope="col">Transaction</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Timestamp</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <TableData deleteTransaction={deleteTransaction}/>
                        </table>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}
History.propTypes = {
    isDarkMode: PropTypes.bool, 
    handleToggle: PropTypes.func, 
    username: PropTypes.string,
  };
export default History
