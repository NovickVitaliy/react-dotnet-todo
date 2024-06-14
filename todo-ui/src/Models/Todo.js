export class Todo {
    static idRunner = 1;
    constructor(task, createdAt) {
        this.id = Todo.idRunner++;
        this.task = task;
        this.createdAt = createdAt;
        this.done = false;
    }
}