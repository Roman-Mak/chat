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
        number: 0
};

    addNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    };

    render = () => {

        return (
            <div className="flex">
                <Message />
                <Qualities qualities={this.state.qualities}/>
                <Counter addNumber={this.addNumber} nubmer={this.state.number}/>
            </div>
        );
    };
}

export default App;
