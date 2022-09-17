import ExpenseForm from "./ExpenseForm";
import Card from '../UI/Card';

const NewExpense = () => {
    return (
        <Card className="new-expense my__container">
            <ExpenseForm />
        </Card>
    );
}
export default NewExpense;