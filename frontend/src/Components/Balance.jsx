import PropTypes from 'prop-types';

function Balance({totalExpenses, totalIncome,accumulation}) {
  return (
        <main className='flex items-center justify-center my-6'>
            <div className='main border-sky-500 cursor-pointer w-96 h-80 shadow-2xl p-6  mx-auto my-12'>
                <div className='relative left-0 w-full h-1/2 '>
                    <span className='absolute left-0 top-5 text-2xl'>Total Balance</span> 
                    <span className='text-sm absolute right-4 top-2'>KSH</span>
                    <br/>
                    <span className='text-4xl absolute left-8 bottom-4'>${accumulation}</span>
                </div>
                <div className='flex justify-center h-1/2 text-2xl'>
                    <div className='flex items-center w-1/2'>&#128737; Income<br/>{totalIncome}</div>
                    <div className='flex items-center w-1/2'>&#9889;Expenses<br/>{totalExpenses}</div>
                </div>
            </div>
        </main>
  )
}

export default Balance
Balance.propTypes = {
    accumulation: PropTypes.number.isRequired,
    totalIncome: PropTypes.number.isRequired,
    totalExpenses: PropTypes.number.isRequired,
};