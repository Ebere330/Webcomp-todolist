class TodoList extends Todo {
    static name = 'todo-list';
    connectedCallback() {
        this.shadow.innerHTML = `
            <slot></slot>
        `
    }
}
TodoList.create()