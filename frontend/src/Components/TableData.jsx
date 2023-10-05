import { FaTrash } from 'react-icons/fa'

const transactions = [
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'},
    {name: 'Money Transfer', amount: 440, date:'09:30 am'}
]
function TableData({deleteTransaction}) {
    return (
        <tbody>
          {transactions.map((tran, index) => (
                    <tr key={index} className='p-8 m-24'>
                        <td className='gap-4 mx-4'> {tran.name} </td>
                        <td className='gap-4 mx-4'> {tran.amount} </td>
                        <td className='gap-4 mx-4'> {tran.date} </td>           
                        <td>
                            <button 
                            onClick={()=>deleteTransaction(tran)} 
                            className="bg-blue-400 p-3 rounded-lg custom-pulse animate-pulse">
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    )
}

export default TableData