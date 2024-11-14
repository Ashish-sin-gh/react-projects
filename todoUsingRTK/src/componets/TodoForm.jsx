import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todoTitle));
    setTodoTitle("");
    // console.log(todoTitle);
  }

  return (
    <form className="border p-2 rounded-lg  ">
      <input
        className="border p-2 rounded-lg mr-2 text-black"
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="add a new todo"
      />
      <button
        className="bg-slate-500 text-blue-50 "
        type="submit"
        onClick={handleAddTodo}
      >
        add
      </button>
    </form>
  );
}

export default TodoForm;
