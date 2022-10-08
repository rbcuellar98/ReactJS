import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = () =>{
    // states to store user input 
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // other way to group all 3 state object to manage to piece of state
    const [userInput, setUserInput] =useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    // handler function for title
    const titleChangeHandler = (event) =>{
        //setEnteredTitle(event.target.value);
        setUserInput({
            // take the object and pull all keyvalue pairs \\ other value are not throwned away
            ...userInput, // override entered title
            enteredTitle: event.target.value,
        });
    }
    // handler function for amount of money
    const amountChangeHandler = (event) =>{
       // setEnteredAmount(event.target.value);
       setUserInput({
        // take the object and pull all keyvalue pairs \\ other value are not throwned away
        ...userInput, // override entered title
        enteredAmount: event.target.value,
    });
    }
    // handler function for date
    const dateChangeHandler = (event) =>{
      //  setEnteredDate(event.target.value);
      setUserInput({
        // take the object and pull all keyvalue pairs \\ other value are not throwned away
        ...userInput, // override entered title
        enteredDate: event.target.value,
    });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className= "new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;