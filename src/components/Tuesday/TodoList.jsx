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

    addTask = (newText) => {
        let newTask = {
            id: v1(),
            title: newText,
            isDone: false,
            priority: "low"
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

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id != taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });
        this.setState({tasks: newTasks}, () => {
            saveState(this.localStorageKey, this.state)
        });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority})
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

