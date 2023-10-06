
function Balance() {
  return (
        <main className='flex items-center justify-center my-12'>
            <div className='main border-sky-500 cursor-pointer w-96 h-80 shadow-2xl p-6  mx-auto my-12'>
                <div className='relative left-0 w-full h-1/2 '>
                    <span className='absolute left-0 top-5 text-2xl'>Total Balance</span> 
                    <span className='text-sm absolute right-4 top-2'>KSH</span>
                    <br/>
                    <span className='text-4xl absolute left-8 bottom-4'>$4400.00</span>
                </div>
                <div className='flex justify-center h-1/2 text-2xl'>
                    <div className='flex items-center w-1/2'>&#128737; Income</div>
                    <div className='flex items-center w-1/2'>&#9889;Expenses</div>
                </div>
            </div>
        </main>
  )
}

export default Balance