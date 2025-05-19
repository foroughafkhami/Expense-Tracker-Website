import React, { createContext, useContext, useState } from 'react'

const TransactionContext = createContext()

function TransactionProvider({children}) {
  const [transactions,setTransactions] = useState([])
  const [income,setIncome]= useState(0)
  const [expense,setExpense]= useState(0)

  return <TransactionContext.Provider value={{
    transactions,
    setTransactions,
    income,
    setIncome,
    expense,
    setExpense
  }}>{children}</TransactionContext.Provider>

}

function useTransactionContext(){
  const context = useContext(TransactionContext) 
  if(context === undefined) throw new Error('TransactionContext was used outside of TransactionProvider')
  return context
}

export  {TransactionProvider, useTransactionContext}