import React, { createContext, useContext, useState,useEffect } from 'react'

const TransactionContext = createContext()

function TransactionProvider({children}) {
  const [transactions,setTransactions] = useState([])
  const [income,setIncome]= useState(0)
  const [expense,setExpense]= useState(0)

  useEffect(() => {
    const newIncome = transactions
      .filter(tran => tran.amount > 0)
      .reduce((acc, tran) => acc + tran.amount, 0);
    const newExpense = transactions
      .filter(tran => tran.amount < 0)
      .reduce((acc, tran) => acc + tran.amount, 0);

    setIncome(newIncome);
    setExpense(newExpense);
  }, [transactions]);

  return <TransactionContext.Provider value={{
    transactions,
    setTransactions,
    income,
    expense,
    
  }}>{children}</TransactionContext.Provider>

}

function useTransactionContext(){
  const context = useContext(TransactionContext) 
  if(context === undefined) throw new Error('TransactionContext was used outside of TransactionProvider')
  return context
}

export  {TransactionProvider, useTransactionContext}