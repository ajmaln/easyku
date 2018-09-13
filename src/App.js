import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import appRoutes from './routes';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span>easy</span><span style={{color: '#d65a5a'}}>KU</span></h1>
        </header>
        <Nav />
        <Switch>
          {
            appRoutes.map((route, key) =>
              <Route key={key} path={process.env.PUBLIC_URL + route.path} exact={!!route.exact} component={route.view} />
            )
          }
        </Switch>
      </div>
    );
  }
}


export default App;
