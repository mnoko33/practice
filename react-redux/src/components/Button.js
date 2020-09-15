import React from 'react';

function Button ({ act, action }) {
  function handleClick () {
    action();
  }

  return (
    <button onClick={handleClick}>{act === 'increase' ? '+ 1' : '- 1'}</button>
  )
}

export default Button;