import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name: userName, age: userAge, id: Math.random().toString()}]; // unique key added to the child using id
    });
  }

  return (
    <div>
      <AddUser onAddUser ={addUserHandler}></AddUser>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
