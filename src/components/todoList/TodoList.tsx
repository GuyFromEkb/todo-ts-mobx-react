import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import ToDoItem from '../toDoItem/ToDoItem'
import './toDolist.scss'

const ToDoList: React.FC = () => {

    const printItems = store.showToDo().map(item => <ToDoItem key={item.id} {...item} />)

    if (store.todos.length === 0)
        return (
            <h5 className='center empty-to-do' >Список дел пуст!</h5>
        )
    return (
        <ul style={printItems.length > 0 ? {} : { borderBottom: 0 }} className="collection">
            {printItems}
        </ul>
    )
}

export default observer(ToDoList)