import React from 'react';
import useInput from './hooks/useInput';
import useModal from './hooks/useModal';

function App() {
  const [value, onChange, clear] = useInput('')
  const { Modal, openModal } = useModal();
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <div>
        <button onClick={() => {console.log(value)}} >print</button>
      </div>
      <div>
        <button onClick={clear} >reset</button>
      </div>
      <div>
        <button onClick={openModal}>modal</button>
        { Modal }
      </div>
    </div>
  );
}

export default App;
