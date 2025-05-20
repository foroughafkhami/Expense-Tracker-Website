import React from 'react'
import {  useTransactionContext } from '../contexts/TransactionContext'
import Transaction from './transaction'


function History() {
  const {transactions} = useTransactionContext()
  return (
    <div className='flex flex-col w-full '>
      <h2 className=' font-bold text-l border-b-2 my-3 py-1.5 text-lg'>History</h2>
      <ul className='relative overflow-visible max-h-40 '>
      {transactions.map((tran)=> 
      <Transaction tran={tran}  key={tran.id} id={tran.id}/>
       )} 
      </ul>
    </div>
  )
}

export default History