const TodoList = (props) => {

    const listItems = props.todos.map((todo) => 
        <li>{todo}</li>
    );

    return(
        <ul>
        {listItems}
        </ul>
    )
}

export default TodoList;