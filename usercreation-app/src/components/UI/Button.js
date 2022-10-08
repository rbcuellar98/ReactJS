import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {


    return(
        // fallback type for the built in button
        <button className={classes.button} type={props.type || 'button'} 
        onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;