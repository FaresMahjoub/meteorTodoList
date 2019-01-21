import React, { Component } from 'react';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {

        // Set the checked property to the opposite of its current value
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);

    }

    togglePrivate() {
        Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
    }

    deleteThisTask() {
        Meteor.call('tasks.remove', this.props.task._id);
    }
    /*archiveThisTaslk(){

    }*/

    render() {
        const taskClassName = classnames({
            checked: this.props.task.checked,
            private: this.props.task.private,
        });        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    delete
                </button>

                <input
                    type="checkbox"
                    readOnly
                    checked={!!this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}
                />
                { this.props.showPrivateButton ? (
                    <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
                        { this.props.task.private ? 'private' : 'public' }
                    </button>)
                    : ''
                }
                <span className="text">
                    <strong>{this.props.task.username}</strong>: {this.props.task.text}
                </span>
            </li>
    );
    }
}