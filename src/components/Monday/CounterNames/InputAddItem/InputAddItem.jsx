import React from 'react';
import AddNameButton from "../AddNameButton/AddNameButton";

class InputAddItem extends React.Component {
    state = {
        currentName: "",
        errorStatus: false
    };

    setErrorStatus = (errStatus) => {
        this.setState({errorStatus: errStatus})
    };

    onCurrentNameChange = (e) => {
        this.setState({currentName: e.currentTarget.value});
        this.setErrorStatus(false)
    };

    addName = () => {
        let newCurrentName = this.state.currentName;
        if (newCurrentName === "") {
            this.setErrorStatus(true);
        } else {
            this.setState({currentName: ""});
            this.props.addName(newCurrentName);
            this.setErrorStatus(false);
        }
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.addName();
        }
    };

    render = () => {
        let inputClass = this.state.errorStatus ? "error" : "";

        return (
            <div>
                <input
                    onChange={this.onCurrentNameChange}
                    value={this.state.currentName}
                    type="text"
                    onKeyPress={this.onKeyPress}
                    className={inputClass}
                    placeholder={"Write your name :)"}
                />
                <AddNameButton addName={this.addName}/>
            </div>
        )
    }
}

export default InputAddItem;