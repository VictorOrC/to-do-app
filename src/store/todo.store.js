import { Todo } from "../todos/models/todo.models";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del alma'),
        new Todo('Piedra del alma'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore Papu');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const addTodo = ( description ) => {
    throw new Error('Not implemented');
}

/**
 * Funcion para marvar como acompletado todo
 * @param {String} todoId identificador de todo
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

/**
 * Funcion para eliminar todo
 * @param {String} todoId identificador de todo 
 */
const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

/**
 * Funcion para eliminar los todos ya completados
 */
const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = ( newFilter = Filters.All ) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}