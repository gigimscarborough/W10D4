import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

const TodoList = (props) => {

    const listItems = props.todos.map((todo, i) => 
        <TodoListItem todo={todo} key={todo.id}/>
        
    );

    return(
        <div>
        <ul>
        {listItems}
        <TodoForm receiveTodo={props.receiveTodo}/>
        </ul>
        </div>
    )
}

export default TodoList;