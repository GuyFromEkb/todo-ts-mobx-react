import { makeAutoObservable } from "mobx";
import { IToDo } from "../interface"

const addTodo = (todos: IToDo[], newTodoText: string): void => {
    const newTodo: IToDo = { complited: false, id: Date.now(), title: newTodoText }

    todos.push(newTodo)
}

const checkToDo = (todos: IToDo[], id: number): IToDo[] =>
    todos.map(item => item.id === id ? { ...item, complited: !item.complited } : item)

const removeTodo = (todos: IToDo[], id: number): IToDo[] =>
    todos.filter((todo) => todo.id !== id)

const showFilterTodo = (todos: IToDo[], activeFilter: string): IToDo[] => {
    switch (activeFilter) {
        case "COMPLITED":
            return todos.filter(item => item.complited)
        case "NOT_COMPLETED":
            return todos.filter(item => !item.complited)
        default:
            return todos
    }
}

class Todos {
    todos: IToDo[] = []
    activeFilter: string = ""

    constructor() {
        makeAutoObservable(this);
    }

    removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id);
    }

    addTodo(newTodoText: string) {
        addTodo(this.todos, newTodoText)
    }

    checkToDo(id: number) {
        this.todos = checkToDo(this.todos, id)
    }

    addFilter(filter: string) {
        this.activeFilter = this.activeFilter === filter ? "" : filter
    }

    showToDo() {
        return showFilterTodo(this.todos, this.activeFilter)
    }
}
const store = new Todos();

export default store;
