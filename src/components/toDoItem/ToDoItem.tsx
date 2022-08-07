import './ToDoItem.scss'
import { IToDo } from '../../interface'
import store from '../../store/store'

const ToDoItem: React.FC<IToDo> = ({ id, title, complited }) => {

    return (
        <li
            className="collection-item"
        >
            <label>
                <input
                    onChange={() => store.checkToDo(id)}
                    checked={complited}
                    type="checkbox" />
                <span
                    className={complited ? 'complited' : ''}
                >
                    {title}
                </span>
            </label>
            <i
                onClick={() => store.removeTodo(id)}
                className="material-icons"
            > delete_forever </i>
        </li >
    )
}

export default ToDoItem