import React from 'react';
import Comp from './components/Comp';
import Variable from './components/Variable';
import Style from './components/Style';
import Props from './components/Props';
import State from './components/State';
import Event from './components/Event';
import Password from './components/Password';
import Ref from './components/Ref';
import Iteration from './components/Iteration';
import Add from './components/Add';
import LiftingState from './components/LiftingState';
import LifeCycle from './components/LifeCycle';
import CssWithImport from './components/CssWithImport';
import Scss from './components/Scss';
import StyledComponent from './components/StyledComponent';


function App() {
  return (
    <div className="App" style={{ margin: '50px', boxSizing: 'border-box' }}>
      <Comp />
      <Variable />
      <Style />
      <Props name="mnoko" age={29} sex="남자"></Props>
      <State />
      <Event />
      <Password />
      <Ref />
      <Iteration />
      <Add />
      <LiftingState />
      <LifeCycle propsColor="blue" />
      <CssWithImport />
      <Scss />
      <StyledComponent />
    </div>
  );
}

export default App;
