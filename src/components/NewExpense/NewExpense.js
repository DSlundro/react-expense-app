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
        props.onAddExpense(expenseData)
    };


    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
        <Card className="new-expense my__container">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&<ExpenseForm 
            onCloseForm={setIsEditing}
            onSaveExpenseData={saveExpenseDataHandler} />}
        </Card>
    );
}
export default NewExpense;