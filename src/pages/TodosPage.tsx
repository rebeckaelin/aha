import "./styles/TodosPage.css";
import ahaLogo from "../assets/Aha!.svg";
import TodoItem from "../components/TodoItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  handleAddTodo,
  handleCheckboxChange,
  handleDelete,
} from "../handlers/todoHandlers";

const TodosPage = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <section className="todo-page">
      <header className="todo-page__header">
        <img src={ahaLogo} alt="aha-logo" className="todo-page__img" />
      </header>
      <div className="todo-page__content">
        <ul className="todo-page__list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onCheckboxChange={() => handleCheckboxChange(index, dispatch)}
              onDelete={() => handleDelete(index, dispatch)}
            />
          ))}
        </ul>
      </div>
      <footer>
        <input
          type="text"
          className="add-new-task"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => handleAddTodo(newTodo, dispatch, setNewTodo)}
        >
          +
        </button>
      </footer>
    </section>
  );
};

export default TodosPage;
