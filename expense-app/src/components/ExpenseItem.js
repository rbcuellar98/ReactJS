import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// component are written using JS functions
// hold the value for custom elements with keys
function ExpenseItem(props) {
    // eslint-disable-next-line no-lone-blocks
    
    // eslint-disable-next-line jsx-a11y/heading-has-content
    return (
    <div className="expense-item">
        {/* output date as a string */}
        <div>
            {/* component tree nested with each other */}
            <ExpenseDate date={props.date}/>
        </div> 
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}



// export component
export default ExpenseItem;