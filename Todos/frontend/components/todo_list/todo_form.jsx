import React from 'react'
import uniqueId from '../../util/unique_id'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.receiveTodo = props.receiveTodo.bind(this)
        this.state = {
            word: ""
            id: uniqueId()
        }
   
    }

    updateTodo(event) {
        this.setState({ word: event.currentTarget.value });
    }

    render() {
        return (
            <div>
                <input onChange={this.receiveTodo} id ={this.state.id} value={this.state.word} />
            </div>
        );
    }
}

export default TodoForm;