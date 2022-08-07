import { useState } from "react";
import store from '../../store/store'

import "./todoform.scss";



const ToDoForm: React.FC = () => {
    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const onAddToDoKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onAddToDo()
        }
    }
    const onAddToDo = () => {
        if (input.length < 4) {
            setError('Минимальная длинна "тудушки" 4 символа')
            return
        }
        store.addTodo(input)
        setError("")
        setInput("")
    }

    return (
        <>
            <div className="todo-form mt2">
                <button onClick={onAddToDo} className="btn-small todo-form__btn">Добавить</button>

                <div className="input-field  s6">
                    <input
                        value={input}
                        onChange={onChangeInput}
                        onKeyDown={onAddToDoKey}
                        id="toDo"
                        type="text"
                        className="validate"
                        placeholder="Введите название дела"
                    />
                    <label className="active" htmlFor="toDo">
                        ДОБАВИТЬ ЗАДАЧУ
                    </label>
                    {error && <span className="helper-text center" data-error="wrong" data-success="right">{error}</span>}

                </div>

            </div>
        </>
    );
};

export default ToDoForm;
