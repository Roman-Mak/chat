import React from 'react';
import '../../App.css';

class TodoListTask extends React.Component {
    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    onPriorityChange = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)
    };

    state = {
        editTitleMode: false,
        editPriorityMode: false,
        taskHover: false
    };

    activateEditMode = (target) => {
        this.setState({[target]: true});
    };

    deactivateEditMode = (target) => {
        this.setState({[target]: false});
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    handleMouseIn = () => {
        this.setState({taskHover: true})
    };
    handleMouseOut = () => {
        this.setState({taskHover: false})
    };

    render = () => {
        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="task-container">
                <div className={containerCssClass}
                     onMouseOver={this.handleMouseIn}
                     onMouseOut={this.handleMouseOut}>
                    <input type="checkbox" checked={this.props.task.isDone}
                           onChange={this.onIsDoneChanged}/>
                    {this.state.editTitleMode
                        ? <input onBlur={() => this.deactivateEditMode("editTitleMode")}
                                 onChange={this.onTitleChanged}
                                 autoFocus={true}
                                 value={this.props.task.title}/>
                        : <span onClick={() => this.activateEditMode("editTitleMode")}>{this.props.task.title}</span>
                    }
                    <span> priority: </span>
                    {this.state.editPriorityMode
                        ? <select onBlur={() => this.deactivateEditMode("editPriorityMode")}
                                  name={"priority"} size={"1"}
                                  onChange={this.onPriorityChange}>
                            <option disabled={true} selected={true}>select priority</option>
                            <option>low</option>
                            <option>middle</option>
                            <option>high</option>
                        </select>
                        : <span
                            onClick={() => this.activateEditMode("editPriorityMode")}>{this.props.task.priority}</span>
                    }
                    <button onClick={this.deleteTask}>x</button>
                </div>
                {this.state.taskHover &&
                <div>
                    <div className="time-status-corner"/>
                    <div className="time-status">
                        <div>created: {this.props.task.created}</div>
                        <div>updated: {this.props.task.updated}</div>
                        <div>finished: {this.props.task.finished}</div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default TodoListTask;

