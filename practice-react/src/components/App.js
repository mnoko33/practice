import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const Wrapper = styled.div`
  width: 700px;
  height: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
`

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos/:id" component={Detail}/>
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
