import { Todo } from "../todos/models/todo.models";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del fentanilo'),
        new Todo('Piedra del marijuana'),
        new Todo('Piedra del cocaine'),
        new Todo('Piedra del lsd'),
        new Todo('Piedra del clonasepan'),
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
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    })
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