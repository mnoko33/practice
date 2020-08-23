import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    document.title = `Cnt: ${cnt}`;
  }, [cnt]);

  const handleBtnClick = () => {
    setCnt(cnt + 1);
  };

  const style = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      <div>클릭한 횟수: {cnt}</div>
      <button onClick={handleBtnClick}>cnt+1</button>
    </div>
  );
};

export default UseEffect;
