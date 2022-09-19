import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Card from '../UI/Card';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.ceil(Math.random().toString() * 100000000)
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const closeEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <Card className="new-expense my__container">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&<ExpenseForm 
            onCloseForm={closeEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler} />}
        </Card>
    );
}
export default NewExpense;