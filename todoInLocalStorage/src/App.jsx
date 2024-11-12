import { useState } from "react";
import { todosContext } from "./context";

function App() {
  const [todos, setTodos] = useState(0);

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

  return (
    <todosContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleStatus, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8 w-screen">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </todosContext.Provider>
  );
}

export default App;
