import React from 'react'
import TodoListItem from './todo_list_item'

const TodoList = (props) => {

    const listItems = props.todos.map((todo, i) => 
        <TodoListItem todo={todo} key={todo.id}/>
        
    );

    return(
        <div>
        <ul>
        {listItems}
        </ul>
        </div>
    )
}

export default TodoList;