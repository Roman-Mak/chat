import React from 'react';
import './App.css';
import Message from "./components/Message/Message";
import Qualities from "./components/Qualities/Qualities";
import Counter from "./components/Counter/Counter";

class App extends React.Component {

    state= {
        qualities: [
            {quality: "Ловкий", id: 1},
            {quality: "Сильный", id: 2},
            {quality: "Смелый", id: 3}
        ],
        value: 0,
        names: []
};

    addName = (name) => {
        this.setState({
            value: this.state.value + 1,
            names:[...this.state.names, {name: name}]
        })
    };


    render = () => {

        return (
            <div className="flex">
                <Message />
                <Qualities qualities={this.state.qualities}/>
                <Counter addName={this.addName} counterValue={this.state.value} names={this.state.names}/>
            </div>
        );
    };
}

export default App;
