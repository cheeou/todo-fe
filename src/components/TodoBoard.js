import React from "react";
import TodoItem from "./TodoItem";
const TodoBoard = ({ todoList, onDelete, onComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>

      {todoList.length > 0 ? (
        todoList.map((item, idx) => (
          <TodoItem
            item={item}
            key={idx}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))
      ) : (
        <h3>There is no Item to show</h3>
      )}
    </div>
  );
};

export default TodoBoard;
