import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Profiles from './components/Profiles';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route path="/profiles" component={Profiles}/>
          <Route render={() => <div>없당..</div>}/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
