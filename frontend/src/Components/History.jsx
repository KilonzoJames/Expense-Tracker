import Navbar from './Navbar'
import Name from './Name';
import TableData from './TableData';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { ThemeProvider } from './ThemeContext';


function History({ username }) {
   
  return (
    <ThemeProvider>
        <div>
        <div><Navbar/></div>
        <div><Name username={username}/></div>
        <div className='mx-auto lg:p-0'>
            <h2 className='text-4xl'>Transaction History</h2>
            <div className="border-0 border-collapse w-full">
                <div className='lg:p-4 lg:m-auto flex justify-center'>
                    <div className="lg:col-span-2">
                        <div className="lg:p-2">Transaction</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="lg:p-2">Amount</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="lg:p-2">Timestamp</div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="lg:p-2">Update</div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="lg:p-2">Delete</div>
                    </div>
                </div>
                <div>
                    <TableData/>
                </div>
            </div>

        </div>
        <div> <Footer/></div>
       
        </div>
    </ThemeProvider>
  )
}
History.propTypes = {
    username: PropTypes.string,
  };
export default History
