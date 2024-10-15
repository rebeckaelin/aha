import { AppDispatch } from "../redux/store";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todosSlice";

// Funktion för att lägga till en ny todo
export const handleAddTodo = (
  newTodo: string,
  dispatch: AppDispatch,
  setNewTodo: (todo: string) => void
) => {
  if (newTodo.trim() === "") return;
  dispatch(addTodo(newTodo));
  setNewTodo("");
};

// Funktion för att toggla (komplettera/avmarkera) en todo
export const handleCheckboxChange = (index: number, dispatch: AppDispatch) => {
  dispatch(toggleTodo(index));
};

// Funktion för att ta bort en todo
export const handleDelete = (index: number, dispatch: AppDispatch) => {
  dispatch(deleteTodo(index));
};
