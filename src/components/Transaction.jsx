import React from 'react'
import { useState } from 'react';
import { useTransactionContext } from '../contexts/TransactionContext';
function Transaction({tran,id}) {
  const sign = tran.amount<0 ? '-' :'+';
  const [isHovered,setIsHovered] = useState(false);
  const {setTransactions,transactions} = useTransactionContext()

  const handleDelete = function(){
    setTransactions(transactions.filter((tran)=>tran.id != id ))
  }
  
  return (
    <li  className={` relative overflow-visible bg-white border-r-4 ${tran.amount>0?'border-green-600':'border-red-600'} px-2 py-1 my-1 gap-2 flex flex-row rounded justify-between content-between`} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <button className={`absolute top-1/2 left-0 -translate-x-full  -translate-y-1/2 ${isHovered?'opacity-100':'opacity-0'} bg-red-500 text-white px-1` } onClick={handleDelete}>X</button>   
      <span >{tran.text}</span>
      <span>{sign}${Math.abs(tran.amount)}</span>
      {console.log(transactions)}

    </li>
  )
}

export default Transaction