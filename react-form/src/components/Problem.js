import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';
import OptionalForm from './OptionalForm';
import Dropdown from './Dropdown';

function Problem (props) {
  const { 
    problemInfo, 
    updateProblemTitle, 
    addNewOption, 
    updateOptionTitle,
    removeOption,
    updateProblemType } = props;

  return (
    <ProblemWrapper>
      <Title
        placeholder="문제"
        value={problemInfo.title}
        onChange={(e) => updateProblemTitle(problemInfo.id, e.target.value)}
      />
      <Dropdown 
        selectedItem={problemInfo.type}
        setSelectedItem={(newType) => updateProblemType(problemInfo.id, newType)}
      />
      <Contents>
        {problemInfo.type === 'input' && 
          <InputForm 
            problemDetail={problemInfo.detail}
          />
        }
        {(problemInfo.type === 'checkbox' || problemInfo.type === 'radio') && 
          <OptionalForm
            formType={problemInfo.type}
            problemId={problemInfo.id}
            options={problemInfo.options} 
            addNewOption={addNewOption}
            updateOptionTitle={updateOptionTitle}
            removeOption={removeOption}
          />
        }
      </Contents>
    </ProblemWrapper>
  )
}

export default React.memo(
  Problem,
  (prevProps, nextProps) => prevProps.problemInfo === nextProps.problemInfo
);

const ProblemWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  border: 1px solid black;
`;

const Title = styled.input`
  all: unset;
  width: calc(100% - 100px);
  font-weight: bolder;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const Contents = styled.div`

`;