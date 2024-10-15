export type Todo = {
  text: string;
  completed: boolean;
};

export type TodoItemProps = {
  text: string;
  completed: boolean;
  onCheckboxChange: () => void;
  onDelete: () => void;
};
