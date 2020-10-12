import React from 'react';
import styled from 'styled-components';

function SubmitButton({ submit }) {
  return (
    <FloatingButton onClick={submit}>
      submit
    </FloatingButton>
  )
}

export default SubmitButton;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #DEDEDE;
`;