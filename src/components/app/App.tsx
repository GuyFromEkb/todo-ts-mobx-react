
import NavBar from '../navbar/Navbar'
import ToDoFilter from '../toDoFilter/ToDoFilter'
import ToDoList from '../todoList/ToDoList'
import ToDoForm from '../toDoForm/ToDoForm'
import '../../sass/media.scss'

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
  )
}

export default App



