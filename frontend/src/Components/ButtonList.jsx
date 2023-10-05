import { useState } from "react";
const divs = [
    {name: 'Incomes', amount: 2000, color: 'bg-green-400' },
    {name: 'Expenses', amount: 1000, color: 'bg-red-600' },
]

function ButtonList() {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);

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

      {showExpenses && (
        <ul className="flex flex-wrap justify-center gap-4 mx-4 my-4">
            Expense: {divs[0]['amount']}
        </ul>
      )}

      {showIncome && (
        <ul className="flex flex-wrap justify-center gap-4 mx-4 my-4">
            Income: {divs[1]['amount']}
        </ul>
      )}
    </div>
  );
}

export default ButtonList;
