import './App.css';
import AddTodo from './components/AddTodo/AddToDo';
import TodoList from './components/ToDolist/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;