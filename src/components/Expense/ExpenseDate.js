import Card from "../UI/Card";
import { getMonth, getYear, getDay } from "../Helpers"

const ExpenseDate = props => {

    return (
    <Card className="expense-date">
        <div className="expense-date__month">{getMonth(props.date)}</div>
        <div className="expense-date__year">{getYear(props.date)}</div>
        <div className="expense-date__day">{getDay(props.date)}</div>
    </Card>
    );
}
export default ExpenseDate;