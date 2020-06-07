import React from 'react';
import style from './CounterNames.module.css';
import Value from "./Value/Value";
import ShowName from "./ShowName/ShowName";
import InputAddItem from "./Input/InputAddItem";

class CounterNames extends React.Component {
    state = {
        names: [],
    };

    addName = (newCurrentName) => {
        this.setState((state) => {
            return (
                {names: [...state.names, {name: newCurrentName}]}
            )
        }, () => {
            alert(`Привет, ${this.state.names[this.state.names.length - 1].name}!`)
        });
};

render = () => {
    return (
        <div className={style.counter}>
            <Value counterValue={this.state.names.length}/>
            <InputAddItem addName={this.addName}/>
            <ShowName names={this.state.names}/>
        </div>
    )
}
}

export default CounterNames;