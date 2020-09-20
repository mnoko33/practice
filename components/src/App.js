import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  return (
    <div className="App">
      <button style={{ marginLeft: '500px' }} onClick={() => setIsSidebarVisible(visible => !visible)}>x</button>
      <Sidebar visible={isSidebarVisible} toggleVisible={setIsSidebarVisible} />
    </div>
  );
}

export default App;
