import "./styles/TodosPage.css";
import ahaLogo from "../assets/Aha!.svg";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

const TodosPage = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todos, setTodos) => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todos, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <section className="todo-page">
        <header className="todo-page__header">
          <img src={ahaLogo} alt="aha-logo" className="todo-page__img" />
        </header>
        <div>
          <ul className="todo-page__list">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onCheckboxChange={() => handleCheckboxChange(index)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        </div>
        <footer>
          <input
            type="text"
            className="add-new-task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="add-button"
            onClick={() => {
              addTodo(todos, setTodos);
            }}
          >
            +
          </button>
        </footer>
      </section>
    </>
  );
};

export default TodosPage;
