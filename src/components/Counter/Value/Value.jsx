import React from 'react';
import style from './Value.module.css';


const Value = (props) => {
    return <span className={style.value}>Counter: {props.counterValue}</span>
};


export default Value;