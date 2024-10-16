import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoTypes";

const storedTodos = localStorage.getItem("todos");

const initialState: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { text: action.payload, completed: false };
      state.push(newTodo);
      // Spara till localStorage eer tillägg
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
        // Uppdatera localStorage efter ändring
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
