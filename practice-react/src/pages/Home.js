import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { create, changeIsDone } from '../action/todo';
import TodoCard from '../components/TodoCard';
import TodoInput from '../components/TodoInput';

const InputWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: coral;
  position: relative;
`

const TodoCardWrapper = styled.div`
  padding: 10px 50px;
`

function Home({ todos, create, changeIsDone }) {
  const changeTodoIsDone = id => {
    changeIsDone(id)
  };

  const createNewTodo = title => {
    create(title);
  }

  return (
    <React.Fragment>
      <InputWrapper>
        <TodoInput onEnter={createNewTodo} />
      </InputWrapper>
      <TodoCardWrapper>
        {
          todos.map(
            todo => <TodoCard
              key={todo.id}
              todo={todo}
              setIsDone={changeTodoIsDone}
            />
          )
        }
      </TodoCardWrapper>
    </React.Fragment>
  )
}

export default connect(
  state => ({ todos: state.todoReducer.todos }),
  {
    create, changeIsDone
  }
)(Home);