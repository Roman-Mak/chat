import React from 'react';
import style from './Value.module.css';

const Value = ({counterValue}) => {
    return (
        <span className={style.value}>Counter: {counterValue}</span>
    );
};

export default Value;