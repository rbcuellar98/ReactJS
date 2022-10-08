import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// component are written using JS functions
// hold the value for custom elements with keys
function ExpenseItem(props) {
    // eslint-disable-next-line no-lone-blocks
    
    // eslint-disable-next-line jsx-a11y/heading-has-content
    return (
    <Card className="expense-item">
        {/* output date as a string */}
            {/* component tree nested with each other */}
            <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
    </Card>
    );
}



// export component
export default ExpenseItem;