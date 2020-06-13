import React from 'react';
import '../../App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {restoreState, saveState} from "./stateFunctions";
import {v1} from 'uuid';

class Tuesday extends React.Component {
    state = {
        todolists: []
    };

    addTodoList = (title) => {
        let newTodoList = {
            id: v1(),
            title: title
        };
        this.setState({todolists: [...this.state.todolists, newTodoList]}, () => {
            saveState("todolists-state", this.state);
        });
    };

    componentDidMount() {
        this.getTodoLists();
    }

    getTodoLists = () => {
        let state = restoreState("todolists-state", this.state);
        this.setState(state);
    };

    render = () => {
        const todolists = this.state.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}/>)

        return (
            <>
                <div className="tuesday">
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="todolists">
                    {todolists}
                </div>
            </>
        );
    }
}

export default Tuesday;

