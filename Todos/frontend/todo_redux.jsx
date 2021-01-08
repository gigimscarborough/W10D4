import React from 'react'
import ReactDOM from "react-dom"
import configureStore from './store/store'
import Root from './components/root'
import { receiveTodo, receiveTodos} from './actions/todo_actions'
import allTodos from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    window.store = configureStore
    window.receiveTodos = receiveTodos
    window.receiveTodo = receiveTodo
 
    ReactDOM.render(<Root store={configureStore} />, root);
})
