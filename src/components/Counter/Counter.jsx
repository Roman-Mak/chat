import React from 'react';
import style from './Counter.module.css';
import Value from "./Value/Value";
import InputName from "./InputName/InputName";
import ShowName from "./ShowName/ShowName";


const Counter = (props) => {
        return (
            <div className={style.counter}>
                <Value counterValue={props.counterValue}/>
                <InputName names={props.names} addName={props.addName}/>
                <ShowName names={props.names}/>
            </div>
        );
};

export default Counter;