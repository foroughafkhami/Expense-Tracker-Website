import Header from './components/header'
import Balance from './components/Balance'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import { TransactionProvider } from './contexts/TransactionContext'

function App() {

  return (
    <TransactionProvider>
      <section className=" bg-slate-100 h-screen flex justify-center items-center my-auto max-h-full">
        <div className='flex flex-col gap-5 w-96 '>
          
          <Header/>
          <Balance/>
          <History/>
          <AddTransaction/>
        </div>
      </section>
    </TransactionProvider>
  )
}

export default App