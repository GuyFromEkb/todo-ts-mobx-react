import { makeAutoObservable } from "mobx";
import { IToDo } from "../interface";

const addTodo = (todos: IToDo[], newTodoText: string, id: number = Date.now(), complited: boolean = false): void => {
    const newTodo: IToDo = { complited: complited, id: id, title: newTodoText }

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
    // todos: IToDo[] = [
    //     { id: 23, complited: true, title: "firstTodo" },
    //     { id: 26, complited: false, title: "secondTodo" }
    // ]
    activeFilter: string = ""

    constructor() {
        makeAutoObservable(this);
    }

    removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id);
    }

    addTodo(newTodoText: string, id?: number, complited?: boolean) {
        addTodo(this.todos, newTodoText, id, complited)
    }

    checkToDo(id: number) {
        this.todos = checkToDo(this.todos, id)        
    }

    addFilter(filter: string) {
        this.activeFilter = this.activeFilter === filter ? "" : filter
        // this.activeFilter = filter
        // console.log(this.activeFilter);
    }

    showToDo() {
        return showFilterTodo(this.todos, this.activeFilter)
    }

}

const store = new Todos();

export default store;
