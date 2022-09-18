import { useState } from "react";
import DUMMY_EXPENSES from './Data'
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })
    }
    
    return (
        <section>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </section>
    );
}

export default App;
