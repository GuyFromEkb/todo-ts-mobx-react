
import NavBar from '../navbar/navbar';
import ToDoList from '../todoList/TodoList';
import ToDoForm from '../toDoForm/ToDoForm';
import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">

        <ToDoForm />
        <ToDoList />



      </div>
    </>

  );
}

export default App;



