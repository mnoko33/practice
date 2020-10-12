import React, { useState } from 'react';
import Title from './components/Title';
import NewButton from './components/NewButton';
import Problem from './components/Problem';
import SubmitButton from './components/SubmitButton';
import styled from 'styled-components';

const dummy = [
  {
    id: 1,
    title: 'input',
    type: 'input',
    detail: '텍스트',
    options: [],
  },
  {
    id: 2,
    title: 'checkbox',
    type: 'checkbox',
    detail: '텍스트',
    options: [
      {
        name: '옵션1', 
      },
      {
        name: '옵션2', 
      },
    ],
  },
  {
    id: 3,
    title: 'radio',
    type: 'radio',
    detail: '텍스트',
    options: [],
  },
]

function App() {
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(4);
  const [problems, setProblems] = useState(dummy);
  const DEFAULT_PROBLEM = {
    id: nextId,
    title: '',
    type: 'input',
    detail: '텍스트',
    options: [
      { name: '옵션1' }
    ],
  };

  const handleProblemInfoChanged = newProblemInfo => {
    setProblems(problems.map(problem => {
      return problem.id === newProblemInfo.id ? newProblemInfo : problem;
    }))
  }

  const addNewProblem = () => {
    const newProblem = DEFAULT_PROBLEM;
    setNextId(nextId => nextId + 1);
    setProblems(problems => [...problems, newProblem])
  }

  const updateProblemTitle = (problemId, newTitle) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return { 
          ...problem, 
          title: newTitle 
        }
      }
      return problem;
    }))
  }

  const addNewOption = (problemId, newOption) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return { 
          ...problem, 
          options: [...problem.options, newOption] 
        }
      }
      return problem;
    }))
  }

  const updateOptionTitle = (problemId, optionIdx, newOption) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          options: problem.options.map((option, idx) => {
            if (idx === optionIdx) {
              return newOption;
            }
            return option;
          })
        }
      }
      return problem;
    }))
  }

  const removeOption = (problemId, optionIdx) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem, 
          options: problem.options.filter((option, idx) => idx !== optionIdx)
        }
      }
      return problem;
    }))
  }

  const updateProblemType = (problemId, problemType) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          type: problemType
        }
      }
      return problem;
    }))
  }

  const submit = () => {
    console.log('TITLE:', title);
    problems.forEach(problem => {
      console.log('-'.repeat(20));
      console.log('problemId :', problem.id);
      console.log('title     :', problem.title);
      console.log('type      :', problem.type);
      if (problem.type === 'input') {
        console.log('detail    :', problem.detail);
      } else {
        console.log('options');
        problem.options.forEach(option => {
          console.log('option    :', option.name);
        })
      }
    })
  }

  return (
    <AppWrapper className="App">
      <Title title={title} setTitle={setTitle} />
      {problems.map(problem => 
        <Problem 
          key={problem.id}
          problemInfo={problem}
          updateProblemTitle={updateProblemTitle}
          addNewOption={addNewOption}
          updateOptionTitle={updateOptionTitle}
          removeOption={removeOption}
          handleProblemInfoChanged={handleProblemInfoChanged}
          updateProblemType={updateProblemType}
        />) 
      }
      <NewButton onClick={addNewProblem} />
      <SubmitButton submit={submit} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  margin: 50px auto;
`;

