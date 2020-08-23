import React, { useState, useCallback } from "react";
import Todo from "./Todo";

function createBulkTodos() {
  const todos = [];
  for (let i = 0; i < 2500; i++) {
    todos.push({
      id: i,
      content: `${i}번째 할 일`,
      isChecked: false,
    });
  }
  return todos;
}

const BulkData = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const style = {
    border: "1px solid black",
    margin: "5px 0",
    width: "200px",
  };

  const handleClick = useCallback(
    (id) =>
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
        )
      ),
    []
  );

  return (
    <div style={style}>
      {todos.map((todo) => (
        <Todo
          key={todo.id.toString()}
          id={todo.id}
          content={todo.content}
          isChecked={todo.isChecked}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default BulkData;
