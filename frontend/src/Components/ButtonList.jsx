import { useState, useEffect } from "react";

function ButtonList() {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5555/expenses`)
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
  const handleShowExpenses = () => {
    setShowExpenses(true);
    setShowIncome(false);
  };

  const handleShowIncome = () => {
    setShowExpenses(false);
    setShowIncome(true);
  };

  return (
    <div>
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
        <ul className="flex flex-wrap justify-center gap-4 mx-4 my-4">
          {expenses.map((expense, index) => (
            <li key={index} className="text-zinc-900 font-bold">
               Amount: {expense.amount}
               <br/>
               Description: {expense.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>{null}</p>
      )}
      {showIncome && Array.isArray(expenses) ? (
              <ul className="flex flex-wrap justify-center gap-4 mx-4 my-4">
                {expenses.map((expense, index) => (
                  <li key={index} className="text-white font-medium">
                     Income: {expense.amount}
                     <br/>
                     Description: {expense.descreption}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{null}</p>
            )}
    </div>
  );
}

export default ButtonList;