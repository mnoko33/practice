import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const clear = () => {
    setValue('');
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return [value, onChange, clear]
}

export default useInput;