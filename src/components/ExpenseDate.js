import Card from "./Card";

function ExpenseDate(props) {
    const month = date => date.toLocaleString('it-IT', {month: 'long'});
    const year = date => date.getFullYear();
    const day = date => date.toLocaleString('it-IT', {day: '2-digit'});

    return (
    <Card className="expense-date">
        <div className="expense-date__month">{month(props.date)}</div>
        <div className="expense-date__year">{year(props.date)}</div>
        <div className="expense-date__day">{day(props.date)}</div>
    </Card>
    );
}
export default ExpenseDate;