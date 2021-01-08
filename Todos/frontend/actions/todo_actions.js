export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receiveTodos = (todosArray) => ({
        type: RECEIVE_TODOS,
        todos: todosArray,  
})
export const receiveTodo = (todo) => ({    
        type: RECEIVE_TODO,
        todo: todo,
})
