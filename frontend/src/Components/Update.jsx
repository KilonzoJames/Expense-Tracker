import  { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';

function Update({ tran, toggleFormVisibility }) {
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        timestamp: new Date().toISOString(),
      });
      
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
  const handleSubmit = async (event) => {
    event.preventDefault();

    const parsedAmount = parseInt(formData.amount, 10); 
    const transactionData = {
      amount: parsedAmount,
      description: formData.description,
      timestamp: formData.timestamp,
    };
  
    try {
        const response = await fetch(`https://expense-tracker-web-server.onrender.com/transaction/${tran.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transactionData),
        });
  
        if (response.ok) {
          console.log('Transaction updated successfully');
        } else {
          console.error('Error updating transaction:', response.status);
        }}
        catch (error) {
            console.error('Error updating transaction:', error);
        }
    };
    
  return (
    <div id="login" className="w-72 h-100 bg-opacity-100 bg-blue-900 rounded shadow flex flex-col justify-between p-3">
      <a href="#" className="border border-sky-500 hover:bg-sky-400 rounded text-white p-2 font-bold flex flex-row gap-3 justify-center">
        <span>Update Details</span><span><FaTimes onClick={toggleFormVisibility} className='absolute right-0 top-0'/></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 100 100" className="w-6 h-6 fill-current"></svg>
      </a>
      <span className="text-center text-sm font-bold text-sky-500 opacity-50">&#128521;</span>
      <form onSubmit={handleSubmit}>
        <label className="text-xs font-bold after:content-['*']" htmlFor="transaction">
          Transaction
        </label>
        <input
          className="w-full p-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          type="text"
          name="description"
          value={formData.transaction}
          onChange={handleInputChange}
          required=''
        />
        <label className="text-xs font-bold after:content-['*']" htmlFor="amount">
          Amount
        </label>
        <input
          className="w-full p-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          required=''
        />
        <button className="w-full mt-8 rounded text-white p-2 text-center font-bold hover:bg-sky-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
Update.propTypes = {
  toggleFormVisibility: PropTypes.func,
  tran: PropTypes.number,
};