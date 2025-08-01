// Clase para definir como luce una tarea
export class Todo {
    
    /**
     * Constructor para cuando se creen nuevas tareas
     * @param {String} description descripcion de la tarea
     */
    constructor( description ) {
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}