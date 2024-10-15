import React from "react";
import "./styles/TodoItem.css";
import { TodoItemProps } from "../types/TodoTypes";

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onCheckboxChange,
  onDelete,
}) => {
  return (
    <li className="todo-item">
      <button
        className={`square-button ${completed ? "checked" : ""}`}
        onClick={onCheckboxChange}
      >
        {completed ? "✖" : ""}
      </button>
      <span className={completed ? "completed" : ""}>{text}</span>
      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
