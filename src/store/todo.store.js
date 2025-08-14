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
    loadStore();
    console.log('InitStore Papu');
}

const loadStore = () => {
    if( !localStorage.getItem('state' )) return;

    const { todos = [], filter = Filters.All} = JSON.parse( localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
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
    saveStateToLocalStorage();
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

    saveStateToLocalStorage();
}

/**
 * Funcion para eliminar todo
 * @param {String} todoId identificador de todo 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );

    saveStateToLocalStorage();
}

/**
 * Funcion para eliminar los todos ya completados
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
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