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

export default {
    initStore,
}