import React from 'react';
import './App.css';
import Message from "./components/Message/Message";
import Qualities from "./components/Qualities/Qualities";

class App extends React.Component {

    qualities = [
        {quality: "Ловкий", id: 1},
        {quality: "Сильный", id: 2},
        {quality: "Смелый", id: 3}
        ];

    render = () => {

        return (
            <div className="flex">
                <Message />
                <Qualities qualities={this.qualities}/>
            </div>
        );
    };
}

export default App;
