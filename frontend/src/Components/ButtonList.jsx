import { useState, useEffect } from "react";
import Balance from './Balance';

function ButtonList() {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([])


  const totalIncome = incomes.reduce((accumulator, currentIncome) => accumulator + currentIncome.amount, 0);
  const totalExpenses = expenses.reduce((accumulator, currentExpense) => accumulator + currentExpense.amount, 0);
  const accumulation = totalIncome - totalExpenses;
  console.log(accumulation)

  useEffect(() => {
    fetch(`https://expense-tracker-web-server.onrender.com/expenses`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(`Error fetching expenses: ${r.status}`);
        }
      })
      .then((data) => {
        console.log(data.expense); 
        setExpenses(data.expense);
      })
      .catch(() => {
        console.log("rejected");
      });
  }, []);   
  useEffect(() => {
    fetch(`https://expense-tracker-web-server.onrender.com/incomes`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(`Error fetching incomes: ${r.status}`);
        }
      })
      .then((incomes) => {
        console.log(incomes); // Assuming the response contains an "income" property
        setIncomes(incomes);
      })
      .catch(() => {
        console.log("rejected");
      });
  }, []);
  
  const handleShowExpenses = () => {
    setShowExpenses(true);
    setShowIncome(false);
  };

  const handleShowIncome = () => {
    setShowExpenses(false);
    setShowIncome(true);
  };

  return (
    <div className="flex flex-wrap">
       <div className="lg:w-1/2">
          <Balance accumulation={accumulation} totalIncome={totalIncome} totalExpenses={totalExpenses}/>
      </div>
      <div className="lg:w-1/2 h-screen">
      <div className="flex justify-center mt-24 my-12">
        <button
          onClick={handleShowExpenses}
          className={`border border-zinc-950 rounded-md cursor-pointer hover:text-white py-4 w-[12rem] mx-2 ${
           showExpenses ?'bg-green-400 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        >
          Expenses
        </button>
        <button
          onClick={handleShowIncome}
          className={`border border-zinc-950  rounded-md cursor-pointer hover:text-white py-4 w-[12rem] mx-2 ${
            showIncome ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Income
        </button>
      </div>
      {showExpenses && Array.isArray(expenses) ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center text-zinc-900 font-bold gap-4 mx-4 my-4">
            {expenses.map((expense, index) => (
              <li key={index} className="">
                Amount: {expense.amount}
                <br />
                Description: {expense.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>{null}</p>
      )}

     {showIncome && Array.isArray(incomes) ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center text-gray-400 text-md gap-4 mx-4 my-4">
            {incomes.map((income, index) => (
              <li key={index} className="text-white font-medium">
                Income: {income.amount}
                <br />
                Description: {income.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>{null}</p>
    )}
    </div>
    </div>
  );
}

export default ButtonList;