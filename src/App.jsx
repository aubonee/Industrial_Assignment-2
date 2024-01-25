
import './App.css'
import AddItem from './addItem/AddItem'
import BudgetShow from './header/budgetShow/BudgetShow'
import Navbar from './header/nav/Navbar'
import AllList from './list/AllList'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <BudgetShow></BudgetShow>
    <AddItem></AddItem>
    <AllList></AllList>
      {/* <div className='text-3xl bg-red-400 text-center'>
      <h1>React with Tailwind</h1>
      </div> */}
      
      
      
    </>
  )
}

export default App
