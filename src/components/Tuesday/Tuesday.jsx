import React from 'react';
import '../../App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {restoreState, saveState} from "./stateFunctions";
import {v1} from 'uuid';
import Preloader from "../common/Preloader";

class Tuesday extends React.Component {
    state = {
        todolists: [],
        loading: true
    };

    addTodoList = (title) => {
        let newTodoList = {
            id: v1(),
            title: title
        };
        this.setState({todolists: [...this.state.todolists, newTodoList]}, () => {
            saveState("todolists-state", this.state.todolists);
        });
    };

    componentDidMount() {
        this.getTodoLists();
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000)
    }

    getTodoLists = () => {
        let todolists = restoreState("todolists-state", this.state.todolists);
        this.setState({todolists});
    };

    render = () => {
        const todolists = this.state.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}/>);

        return (
            <>
                {
                    this.state.loading
                        ? <Preloader/>
                        : <>
                            <div className="tuesday">
                                <AddNewItemForm addItem={this.addTodoList}/>
                            </div>
                            <div className="todolists">
                                {todolists}
                            </div>
                        </>
                }
            </>
        );
    }
}

export default Tuesday;

