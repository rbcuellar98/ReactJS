import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// component are written using JS functions
// hold the value for custom elements with keys
const ExpenseItem = (props) => {
    // react hook
    const [title, setTitle] = useState(props.title);
    // event listerner in JSX structure
    const clickHandler = () =>{
        // state of the title being changed
        setTitle('Updated');
        console.log(title);
    };

    // eslint-disable-next-line no-lone-blocks
    // eslint-disable-next-line jsx-a11y/heading-has-content
    return (
    <Card className="expense-item">
        {/* output date as a string */}
            {/* component tree nested with each other */}
            <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
    </Card>
    );
}



// export component
export default ExpenseItem;