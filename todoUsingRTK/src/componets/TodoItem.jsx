import { useState } from "react";

function TodoItem() {
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  return (
    <>
      <input type="text" readOnly={true} value={updatedTodo} />
    </>
  );
}

export default TodoItem;
