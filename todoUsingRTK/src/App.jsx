import "./App.css";
import TodoForm from "./componets/todoForm";
import TodoItem from "./componets/TodoItem";
import TodoList from "./componets/TodoList";

function App() {
  return (
    <>
      <h1>todo manager using Redux ToolKit</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
