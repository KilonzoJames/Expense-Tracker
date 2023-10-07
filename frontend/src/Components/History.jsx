import Navbar from './Navbar'
import Name from './Name';
import TableData from './TableData';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { ThemeProvider } from './ThemeContext';


function History({ username }) {
   
  return (
    <ThemeProvider>
        <Navbar/>
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
                            <TableData
                            />
                        </table>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </ThemeProvider>
  )
}
History.propTypes = {
    username: PropTypes.string,
  };
export default History
