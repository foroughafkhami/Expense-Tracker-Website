import React from 'react'
import { useTransactionContext } from '../contexts/TransactionContext'

function Balance() {
  const {income,expense} = useTransactionContext()

  return (
    <div className='flex flex-col gap-5 w-full font-bold '>
      <div>
         <h2 className='uppercase text-lg'>your balance</h2>
         <h3 className='text-xl'>${(income+expense).toFixed(2)}</h3>
      </div>
     
      <div className='flex flex-row bg-white py-3 px-3 divide-x-2 items-end rounded'>
        <div className='basis-1/2 flex flex-col items-center px-8 '>
          <div className='uppercase'>income</div>
          <div className='text-green-600 text-xl'>${income.toFixed(2)}</div>
        </div>
        <div className='basis-1/2 flex flex-col items-center px-8 '>
          <div className='uppercase'>expense</div>
          <div className='text-red-600 text-xl'>${Math.abs(expense).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default Balance