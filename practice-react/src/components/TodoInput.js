import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;
  margin: 30px 5% 0;
  padding: 5px 15px;
  height: 60px;
  background-color: #FFF;
`

function TodoInput({ onEnter }) {
  const [title, setTitle] = useState('');

  const handleValueChange = e => {
    setTitle(e.target.value);
  }

  const handleEnterPress = e => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      onEnter(title);
      setTitle('');
    }
  }

  const handleClick = e => {
    if (title.length > 0) {
      setTitle('');
    }
  }

  return (
    <Input 
      value={title} 
      onChange={handleValueChange}
      onKeyDown={handleEnterPress}
      onClick={handleClick}
      placeholder="오늘 할 일을 입력해주세요"
      autoFocus={true}
    />
  )
}

export default TodoInput;