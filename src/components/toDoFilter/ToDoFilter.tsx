import { observer } from "mobx-react-lite";
import store from "../../store/store";
import "./ToDoFilter.scss";

const ToDoFilter: React.FC = () => {

    if (store.todos.length === 0)
        return (
            <>
            </>
        )

    return (
        <div className="filter">
            <button
                onClick={() => store.addFilter("")}
                className={`filter__btn  btn-small ${store.activeFilter === "" ? "active" : ""}`}
            >
                все
                <i className="material-icons right">event_note</i>
            </button>

            <button
                onClick={() => store.addFilter("COMPLITED")}
                className={`filter__btn  btn-small ${store.activeFilter === "COMPLITED" ? "active" : ""}`}
            >
                выполненные
                <i className="material-icons right">event_available</i>
            </button>

            <button
                onClick={() => store.addFilter("NOT_COMPLETED")}
                className={`filter__btn  btn-small ${store.activeFilter === "NOT_COMPLETED" ? "active" : ""}`}
            >
                не выполненные
                <i className="material-icons right">event_busy</i>
            </button>
        </div >
    )
}

export default observer(ToDoFilter)
