import { useState } from 'react';
import '../styles/Transaction.css'
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';

function TransactionForm({handleArrowClick}) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const parsedAmount = parseInt(amount, 10); // Parse amount as an integer
    const transactionData = { amount: parsedAmount, description, timestamp };
      
    try {
      const response = await fetch("https://expense-tracker-web-server.onrender.com/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });

      if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json(); // Read the response body once
      console.log(responseData);

      // Update the list of transactions in state with the new transaction
      setTransactions((transactions) => [...transactions, responseData]);

      // Clear the input fields after successful submission
      setAmount('');
      setDescription('');
      } else {
        throw new Error(`Error: HTTP status ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <div className="login-header relative">
        <div><FaTimes onClick={handleArrowClick} className='absolute right-0 top-0'/></div>
        <div>Add Transaction</div>
      </div>
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        id="amount"
        placeholder='Enter Amount $'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="max-width-black" 
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="max-width-black" 
      />
      <button className="login-button" type="submit" id="login-button">
        Submit
      </button>
    </form>
  
  )
}
TransactionForm.propTypes = {
  handleArrowClick: PropTypes.func.isRequired,

};
export default TransactionForm;
