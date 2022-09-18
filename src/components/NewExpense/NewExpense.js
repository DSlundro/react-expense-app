import ExpenseForm from "./ExpenseForm";
import Card from '../UI/Card';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.ceil(Math.random().toString() * 100000000)
        };
        props.onAddExpense(expenseData)
    };

    return (
        <Card className="new-expense my__container">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
    );
}
export default NewExpense;