import { FaTrash, FaEdit } from 'react-icons/fa'

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
                                // onClick={UpdateTran}
                                className='border animate-bounce border-green-950 rounded-md cursor-pointer hover:text-white p3-4 mx-2 '
                                > <FaEdit/>
                            </button>
                        </td>
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