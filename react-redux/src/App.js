import React from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import { connect } from 'react-redux';
import { increase, decrease } from './modules/counter';

function App({ number, increase, decrease }) {
  return (
    <div className="App">
      <Counter number={number}/>
      <Button act="increase" action={increase} />
      <Button act="decrease" action={decrease}/>
    </div>
  );
}


export default connect(
  state => ({
    number: state.number
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  })
)(App);
/*
export default connect(
  state => ({
    number: state.number
  }), {
    increase,
    decrease
  }
)(App);
*/