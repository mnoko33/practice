import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/:name?" component={NewsList}/>
    </div>
  );
}

export default App;
