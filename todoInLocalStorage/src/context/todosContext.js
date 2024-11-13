import { createContext, useContext } from "react";

export const todosContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: "title",
      completed: false,
    },
    {},
  ],

  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
  toggleStatus: (id) => {},
});

export function useTodos() {
  return useContext(todosContext);
}
