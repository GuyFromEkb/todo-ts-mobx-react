import { useState } from "react";

import "./todoform.scss";

interface ToDoFormProps {
    onAdd?(todo: string): void;
}

const ToDoForm: React.FC<ToDoFormProps> = (props) => {
    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    // const onAddTodoKey = (e: React.KeyboardEvent) => {

    //     if (e.key === "Enter") {
    //         if (input.length < 4) {
    //             setError('Минимальная длинна "тудушки" 4 символа')
    //             return
    //         }
    //         props.onAdd(input)
    //         setError("")
    //         setInput("")
    //     }
    // }

    return (
        <>
            <div className="todo-form mt2">
                <div className="row">
                    <div className="input-field  s6">
                        <input
                            value={input}
                            onChange={onChangeInput}
                            // onKeyDown={onAddTodoKey}
                            id="toDo"
                            type="text"
                            className="validate"
                            placeholder="Введите название дела"
                        />
                        <label className="active" htmlFor="toDo">
                            ADD TODO
                        </label>
                        {error && <span className="helper-text center" data-error="wrong" data-success="right">{error}</span>}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoForm;
