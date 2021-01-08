const TodoList = (props) => {

    const listItems = props.todos.map((todo, i) => 
        <li key={i}>{todo}</li>
    );

    return(
        <ul>
        {listItems}
        </ul>
    )
}

export default TodoList;