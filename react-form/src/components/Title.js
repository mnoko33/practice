import React from 'react';
import styled from 'styled-components';

function Title ({ title, setTitle }) {
  const handleOnChangeTitle = e => {
    setTitle(e.target.value);
  }

  return (
    <TitleInput
      placeholder="제목을 입력해주세요."
      value={title} 
      onChange={handleOnChangeTitle}
    />
  )
}

export default Title;

const TitleInput = styled.input`
  all: unset;
  font-size: 20px;
  font-weight: bolder;
  width: calc(100% - 30px);
  padding: 15px;
`;