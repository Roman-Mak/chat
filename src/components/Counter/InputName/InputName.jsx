import React from 'react';
import AddNameButton from "./AddNameButton/AddNameButton";


class InputName extends React.Component {

    state = {
        name: ""
    };

    inputTextFn = (e) => {
        this.setState({name: e.currentTarget.value})
    };

    onAddAlertClick = () => {
        this.props.addName(this.state.name);
        if (this.state.name) {
            alert(`Привет, ${this.state.name}!`);
        }
        this.setState({name: ""})
    };

    render = () => {
        return (
            <div>
                <input onChange={this.inputTextFn} value={this.state.name} type="text"/>
                <AddNameButton onAddAlertClick={this.onAddAlertClick}/>
            </div>
        )
    };
}


export default InputName;