import { useEffect, useState } from "react";
import { todosContext } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  function deleteTodo(id) {
    const filteredList = todos.filter((todo) => todo.id !== id);
    setTodos(filteredList);
  }

  function updateTodo(todo, id) {
    const newList = todos.map((item) => (item.id === id ? todo : item));
    setTodos(newList);
  }

  function toggleStatus(id) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <todosContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleStatus, updateTodo }}
    >
      <div className="bg-[#16315a] min-h-screen py-8 w-screen">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </todosContext.Provider>
  );
}

export default App;
