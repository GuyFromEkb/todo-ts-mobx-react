
import NavBar from '../navbar/navbar';
import ToDoFilter from '../toDoFilter/ToDoFilter';
import ToDoList from '../todoList/TodoList';
import ToDoForm from '../toDoForm/ToDoForm';
import '../../sass/media.scss';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    </>

  );
}

export default App;



