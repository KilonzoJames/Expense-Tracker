import { useState } from 'react';
import '../styles/Transaction.css'
import PropTypes from 'prop-types';

function TransactionForm({ onSubmit }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const parsedAmount = parseInt(amount, 10); // Parse amount as an integer
    const transactionData = { amount: parsedAmount, description, timestamp };
      
    try {
      const response = await fetch("http://127.0.0.1:5555/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });
      return response.json().then(responseData => {
        console.log(responseData);
        if (response.ok) {
          console.log("Transaction submitted successfully");
        } else {
            throw new Error(`Username or password already registered: ${response.status};`);
        }
    });
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <div className="login-header">
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
  onSubmit: PropTypes.func.isRequired,

};
export default TransactionForm;
