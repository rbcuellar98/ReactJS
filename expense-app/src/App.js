import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    // return html code inside the function
    // jsx is a mix of html and javascript
    <div className="App">
      <h2>React 18</h2>
      {/*Imported custom component*/}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
