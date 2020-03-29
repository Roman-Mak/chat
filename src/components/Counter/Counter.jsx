import React from 'react';
import style from './Counter.module.css';


class Counter extends React.Component {

    inputText = React.createRef();

    onAddAlertClick = () => {
        this.props.addNumber();
        if (this.inputText.current.value !== "") {
            alert(`Привет, ${this.inputText.current.value}!`);
        } else {return}
        this.inputText.current.value = "";
    };

    render = () => {

        return (
            <div>
                <span>{this.props.nubmer}</span>
                <input ref={this.inputText} type="text"/>
                <button onClick={this.onAddAlertClick}>Button</button>
            </div>
        );
    };
}

export default Counter;