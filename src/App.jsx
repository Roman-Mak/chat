import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <Navbar/>
                <Route path={"/monday"} render={() => <Monday/>}/>
            </div>
        );
    };
}

export default App;
