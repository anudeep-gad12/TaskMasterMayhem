import { useState } from "react";
import Button from "../UI/Button";
const Todo = ({ todo, index, completeTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todo.newInfo);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleEdit = () => {
    if (newValue.trim() !== "") {
      updateTodo(index, newValue);
      setIsEditing(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className="flex justify-between my-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newValue}
            className="outline rounded"
            onChange={(e) => {
              setNewValue(e.target.value);
            }}
          />
          {isEmpty && (
            <span className="text-other-red">Input cannot be empty.</span>
          )}
        </>
      ) : (
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.newInfo}
        </span>
      )}

      {isEditing ? (
        <Button onClick={handleEdit}> Update</Button>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button
            onClick={() => completeTodo(index)}
            className="bg-other-green"
          >
            Complete
          </Button>
          <Button onClick={() => deleteTodo(index)} className="bg-other-red">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Todo;
