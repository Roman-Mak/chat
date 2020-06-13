import React from 'react';
import Monday from "./components/Monday/Monday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Tuesday from "./components/Tuesday/Tuesday";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <Navbar/>
                <Route path={"/monday"} render={() => <Monday/>}/>
                <Route path={"/tuesday"} render={() => <Tuesday/>}/>
            </div>
        );
    };
}

export default App;
