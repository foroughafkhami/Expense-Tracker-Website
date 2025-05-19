import React from 'react'
import {  useTransactionContext } from '../contexts/TransactionContext'

function History() {
  const {transactions} = useTransactionContext()
  
  return (
    <div className='flex flex-col w-full'>
      <h2 className=' font-bold text-l border-b-2 my-3 py-1.5 text-lg'>History</h2>
      <div className='overflow-auto max-h-40'>
      {transactions.map((tran,i)=>
        <div  key={i} className={`bg-white border-r-4 ${tran.amount>0?'border-green-600':'border-red-600'} px-2 py-1 my-1 gap-2 flex flex-row rounded `}>
          <div className='w-full'>{tran.text}</div>
          <div >{tran.amount}</div>

        </div>)} 
        </div>
    </div>
  )
}

export default History