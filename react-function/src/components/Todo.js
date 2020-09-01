import React from "react";

const Todo = (props) => {
  const { id, content, isChecked, handleClick } = props;
  console.log(id);
  return (
    <div
      onClick={() => handleClick(id)}
      style={{
        textDecorationLine: isChecked ? "line-through" : "none",
        border: "1px solid black",
        margin: "3px",
      }}
    >
      {content}
    </div>
  );
};

export default React.memo(Todo);
