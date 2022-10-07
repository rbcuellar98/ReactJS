import ExpenseItem from './components/ExpenseItem';
import './index.css';

function App() {
  // components are reusible to pass promps data
  const expenses =[
    {id:'e1',title: 'STM Pass', amount: 60, date: new Date(2022, 2, 12)},
    {id:'e2',title: 'Phone Bill', amount: 55, date: new Date(2022,7,14)},
    {id:'e3',title: 'Rent',amount: 900, date: new Date(2022,7,20)},
    {id:'e4',title: 'Subscription', amount: 20, date: new Date(2022, 6, 20)}
  ]
  return (
    // return html code inside the function
    // jsx is a mix of html and javascript
    <div className="App">
      <h2>Expenses app</h2>
      {/*Imported custom component*/}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      
    </div>
  );
}

export default App;
