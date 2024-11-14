import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "abc",
      completed: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const item = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(item);
    },

    deleteTodo: (state, action) => {
      const newList = state.filter((todo) => todo.id !== action.payload);
      state.todos = newList;
    },

    updateTodo: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const selectedTodo = state.find((todo) => todo.id === id);
      if (selectedTodo) {
        selectedTodo.title = updatedTitle;
      }
    },

    ToggleTodo: (state, action) => {
      const selectedTodo = state.find((todo) => todo.id === action.payload);
      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, ToggleTodo, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
