import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const [updatedTodo, setUpdatedTodo] = useState(todo.title);
  const [isEditable, setIsEditable] = useState(false);

  const dispatch = useDispatch();

  function handleTodoDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleEditBtn() {
    setIsEditable((prev) => !prev);
    dispatch(updateTodo({ id: todo.id, updatedTitle: updatedTodo }));
  }

  return (
    <>
      <div className="w-full">
        <input
          className=""
          type="text"
          readOnly={!isEditable}
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
        <button className="" onClick={handleEditBtn}>
          {isEditable ? "update" : "edit"}
        </button>
        <button className="" onClick={handleTodoDelete}>
          X
        </button>
      </div>
    </>
  );
}

export default TodoItem;
