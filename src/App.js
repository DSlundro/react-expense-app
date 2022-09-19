import { useState } from "react";
import DUMMY_EXPENSES from './Data'
import ExpensesTitle from "./components/ExpensesTitle";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";


const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })
    }
    
    return (
        <section>
            <ExpensesTitle />
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </section>
    );
}

export default App;
