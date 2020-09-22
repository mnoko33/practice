import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 50px;
  padding: 15px;
  margin-top: 20px;
  border: 2px solid ${props => props.isDone ? 'coral' : 'black'};
`

function TodoCard(props) {
  const { todo, setIsDone, history } = props;
  const handleClick = e => {
    e.stopPropagation();
    if (e.currentTarget.className === 'showDetail') {
      history.push(`/todos/${todo.id}`)
    }
  }

  return (
    <Card 
      isDone={todo.isDone}
      onClick={() => {
        setIsDone(todo.id)
      }} 
    >
      <input
        className="checkbox"
        type="checkbox" 
        readOnly={true}
        checked={todo.isDone}
      />
      <span>title: {todo.title}</span>
      <span 
        className="showDetail"
        style={{ position: 'absolute', right: '5px', border: '1px solid black' }}
        onClick={handleClick}
      >자세히보기</span>
    </Card>
  )
}

export default withRouter(TodoCard);
