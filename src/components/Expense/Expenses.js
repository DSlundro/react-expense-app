import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <div className="my__container">
            <Card className="bg-black px-5 py-3">
                <ExpensesFilter 
                selected={filteredYear}
                onChangeHandler={filterChangeHandler}/>
                {
                    props.items.map( item => 
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date} 
                    />)
                }
            </Card>
        </div>
    );
}
export default Expenses;