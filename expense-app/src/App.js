import React from 'react';
import Expenses from './components/Expenses';
import './index.css';

function App() {
  // components are reusible to pass promps data
  const expenses =[
    {id:'e1',title: 'STM Pass', amount: 60, date: new Date(2022, 2, 12)},
    {id:'e2',title: 'Phone Bill', amount: 55, date: new Date(2022,7,14)},
    {id:'e3',title: 'Rent',amount: 900, date: new Date(2022,7,20)},
    {id:'e4',title: 'Subscription', amount: 20, date: new Date(2022, 6, 20)}
  ]
    // eslint-disable-next-line no-lone-blocks
    {/*Alternative to JSX using React object*/}
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Expenses App" ),
  //   React.createElement(Expenses, {items: expenses})
  //   );

  return (
    // return html code inside the function
    // jsx is a mix of html and javascript
    <div className="App">
      <h2> Expenses app</h2>
      {/** expenses being renderer*/}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
