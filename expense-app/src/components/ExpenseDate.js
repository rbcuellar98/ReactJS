import './ExpenseDate.css';
function ExpenseDate (props) {
    // eslint-disable-next-line no-lone-blocks
    {/* output date in human language with toLocaleString */}
    const month = props.date.toLocaleString('en-Us',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const year = props.date.getFullYear('en-US',{year: 'numeric'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div> 
    );
}

export default ExpenseDate;