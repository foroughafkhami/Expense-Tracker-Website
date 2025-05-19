import React from 'react'
import { ErrorMessage, Field, Formik ,Form} from 'formik'
import { useTransactionContext } from '../contexts/TransactionContext'
function AddTransaction() {
  const {transactions, setTransactions,setIncome,setExpense,income,expense} = useTransactionContext() 
  return (
    <div className='w-full'>
      <h2 className='font-bold text-lg border-b-2 my-3  py-1.5 '>Add new transaction</h2>
      <Formik
        initialValues={{text:"",amount:""}}
        validate={values=> {
        const errors ={}
        if(!values.text){
          errors.text ='Required text'
        }
        if(!values.amount){
          errors.amount ='Required amount'
        }
        return errors 
        }}


        onSubmit= {(values,{setSubmitting,resetForm})=>{
          if(values.amount<0 && Math.abs(values.amount) > expense + income) {
            alert("You cannot withdraw more than your balance. Try Again") 
            console.log(values.amount)
            
            setSubmitting(false)

            return
          }
          values.amount > 0 ? setIncome(income => income + values.amount): setExpense(expense=> expense + values.amount)
          setTransactions([{text:values.text,amount:values.amount},...transactions])
          resetForm()
          setSubmitting(false)
          
        }}
        resetForm

      >
        {({isSubmitting })=> (
          <Form className='flex flex-col gap-2 '> 
            <label htmlFor='text' className='font-bold text-base'>Text</label>
            <Field className="py-2 px-2 rounded" type='text' name='text' id='text' placeholder='Enter text...' />
            <ErrorMessage name='text'>{msg=> <div className='text-red-800 text-xs'>{msg}</div>}</ErrorMessage>
            <label htmlFor='amount' className='font-bold text-base'>Amount<div>
              (negative -  expense, positive - Income)</div></label>
            <Field className="py-2 px-2 rounded" type='number' name='amount' id='amount' placeholder='Enter amount...' />
            <ErrorMessage name='amount'>{msg=> <div className='text-red-800 text-xs'>{msg}</div>}</ErrorMessage>
            <button className="bg-indigo-500 rounded text-white py-2" type='submit' disabled={isSubmitting }>Add transaction
              
            </button>
          </Form>
        )}
      </Formik>
     
    </div>
  )
}

export default AddTransaction