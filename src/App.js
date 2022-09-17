import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

    return (
        <section>
            <NewExpense />
            <Expenses />
        </section>
    );
}

export default App;
