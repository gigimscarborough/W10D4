import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"



const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {}
    switch (action.type) {
        case RECEIVE_TODOS:
            debugger
            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            });
            debugger
            return nextState;
        case RECEIVE_TODO:
            debugger
            nextState = Object.assign({}, state)
            debugger
            nextState[action.todo.id] = action.todo
            debugger
            return nextState
            default:
                return state;
            }
        }
        
        export default todosReducer;
        
        // const newTodos = [{
            //     id: 3,
            //     title: "study",
            //     body: "with soap",
            //     done: false
            // },
            //     {
                //         id: 4,
                //         title: "sleep",
                //         body: "with shampoo",
                //     }]
                
                
                // const newTodo = { [action.todo.id]: action.todo };
                // return Object.assign({}, state, newTodo);