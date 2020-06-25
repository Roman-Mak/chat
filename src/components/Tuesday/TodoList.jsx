import React from 'react';
import '../../App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {restoreState, saveState} from "./stateFunctions";
import {v1} from 'uuid';

class TodoList extends React.Component {
    state = {
        tasks: [],
        filterValue: "All"
    };

    localStorageKey = "our-state-" + this.props.id;

    componentDidMount() {
        this.getTasks();
    };

    deleteTask = (taskId) => {
        this.setState({tasks: this.state.tasks.filter(task => taskId !== task.id)}, () => {
            saveState(this.localStorageKey, this.state)
        })
    };

    getTasks = () => {
        let state = restoreState(this.localStorageKey, this.state);
        this.setState(state);
    };

    getDateString = () => {
        const date = new Date();
        return `${date}`.split("G")[0];
    };

    addTask = (newText) => {
        const date = this.getDateString();
        let newTask = {
            id: v1(),
            title: newText,
            isDone: false,
            priority: "low",
            created: date,
            updated: date,
            finished: "not finished"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, () => {
            saveState(this.localStorageKey, this.state)
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {
            saveState(this.localStorageKey, this.state)
        });
    };

    changeTask = (taskId, obj, timeStatus) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj, ...timeStatus};
            }
        });
        this.setState({tasks: newTasks}, () => {
            saveState(this.localStorageKey, this.state)
        });
    };

    changeStatus = (taskId, isDone) => {
        const date = this.getDateString();
        let finished;
        isDone ? finished = date : finished = "not finished";
        this.changeTask(taskId, {isDone}, {finished});
    };
    changeTitle = (taskId, title) => {
        const date = this.getDateString();
        this.changeTask(taskId, {title}, {updated: date});
    };
    changePriority = (taskId, priority) => {
        const date = this.getDateString();
        this.changeTask(taskId, {priority}, {updated: date});
    };

    render = () => {
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title}/>
                    <AddNewItemForm addItem={this.addTask}/>
                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               changePriority={this.changePriority}
                               tasks={this.state.tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.isDone === false;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.isDone === true;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

export default TodoList;

