import React, { useState } from "react";

const State = () => {
  const [info, setInfo] = useState({
    name: "mnoko",
    age: 29,
    job: "FE developer",
  });

  const style = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "10px",
  };

  const handleBtnClick = () => {
    setInfo({
      name: "zaqwes",
      age: 21,
      job: "Full developer",
    });
  };

  return (
    <div style={style}>
      <div>이름 : {info.name}</div>
      <div>나이 : {info.age}</div>
      <div>직업 : {info.job}</div>
      <button onClick={handleBtnClick}>수정</button>
    </div>
  );
};

export default State;
