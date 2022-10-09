import React from "react";
import Card from '../UI/Card';
import classes from './UsersList.module.css';


const UsersList = props => {
    return (
    <Card className={classes.users}>
        <ul>
            {/*map array to execute on every item on the array of users */}
        {props.users.map((user)=>(
            // each child in alist should have a unique key
        <li key={user.id}>{user.name} ({user.age} years old)</li>
        ))}
        </ul>
    </Card>
    );
};

export default UsersList;