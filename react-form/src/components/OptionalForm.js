import React from 'react';
import styled from 'styled-components';

function OptionalForm(props) {
  const {
    formType,
    problemId,
    options,
    addNewOption,
    updateOptionTitle,
    removeOption
  } = props;

  const createNewOption = name => ({ name })

  return (
    <>
      {options.map((option, idx) => 
        <OptionWrapper key={idx}>
          <OptionalInput
            name="Option"
            type={formType}
            disabled
          />
          <OptionNameInput 
            value={option.name}
            onChange={e => updateOptionTitle(problemId, idx, createNewOption(e.target.value))}
          />
          <Button onClick={() => removeOption(problemId, idx)}>
            x
          </Button>
        </OptionWrapper>)
      }
      <NewOptionButton onClick={() => addNewOption(problemId, createNewOption(`옵션 ${options.length + 1}`))}>
        옵션 추가
      </NewOptionButton>
    </>
  )
}

export default OptionalForm;

const OptionWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const OptionalInput = styled.input`
  width: 20px;
  height: 20px;
`;

const OptionNameInput = styled.input`
  all: unset;
  width: calc(100% - 45px);
  height: 20px;
  margin-left: 5px;
  border-bottom: 1px solid #000;
`;

const Button = styled.button`
  text-align: center;
  width: 20px;
  height: 20px;
`;

const NewOptionButton = styled.button`
  margin-top: 10px;
  padding: 5px;
  width: 100%;
`;