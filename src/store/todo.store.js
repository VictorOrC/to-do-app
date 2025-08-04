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

const getTodos = ( filter = Filters.All ) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Opcion ${filter} no esta permitida.`);
    }
}

const addTodo = ( description ) => {
    if( !description ) throw new Error('Se necesita la descripcion');
    state.todos.push( new Todo(description) );
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
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

/**
 * Funcion para eliminar los todos ya completados
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    getTodos,
    loadStore,
    setFilter,
    toggleTodo,
}