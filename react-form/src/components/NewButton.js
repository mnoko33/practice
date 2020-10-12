import React from 'react';
import styled from 'styled-components';

function NewButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      new
    </Button>
  )
}

export default NewButton;

const Button = styled.button`
  width: 100%;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;