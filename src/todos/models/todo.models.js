import { v4 as uuid } from 'uuid';

// Clase para definir como luce una tarea
export class Todo {
    
    /**
     * Constructor para cuando se creen nuevas tareas
     * @param {String} description descripcion de la tarea
     */
    constructor( description ) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}