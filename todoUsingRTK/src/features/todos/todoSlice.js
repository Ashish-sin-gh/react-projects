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
      console.log(state);
      const newList = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newList;
    },

    updateTodo: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const selectedTodo = state.todos.find((todo) => todo.id === id);
      if (selectedTodo) {
        selectedTodo.title = updatedTitle;
      }
    },

    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
