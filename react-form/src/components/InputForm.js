import React from 'react';
import styled from 'styled-components';

function InputForm({ problemDetail }) {
  return (
    <Input
      readOnly
      value={problemDetail}
    />
  )
}

export default InputForm;

const Input = styled.input`
  all: unset;
  width: 100%;
  margin-top: 10px;
`;