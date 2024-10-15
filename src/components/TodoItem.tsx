import React from "react";

type TodoItemProps = {
  text: string;
  completed: boolean;
  onCheckboxChange: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onCheckboxChange,
  onDelete,
}) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={onCheckboxChange} />
      <span className={completed ? "completed" : ""}>{text}</span>
      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
