import React from "react";

const Props = (props) => {
  const { name, age, job } = props;
  const style = {
    border: "1px solid black",
    padding: "10px",
  };
  return (
    <div style={style}>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <div>직업: {job}</div>
    </div>
  );
};

export default Props;
