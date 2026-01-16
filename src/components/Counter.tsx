import React, {useState} from 'react';
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount]= useState(0);

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

    return (
        <div className={classes.wrapper}>
            <h1>{count}</h1>
            <div>
                <button className={classes.button} onClick={increment}>+</button>
            </div>
            <div>
                <button className={classes.button} onClick={decrement}>-</button>
            </div>
        </div>
    );
};
