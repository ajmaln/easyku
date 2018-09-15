import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import appRoutes from './routes';
import Nav from './components/Nav';
import PermissionPopup from './components/PermissionPopup/PermissionPopup';
import { messaging, sendTokenToServer } from './utils/firebase';


class App extends Component {

  state = {
    hidden: true,
    rejected: false
  }

  getToken = () => {
    messaging.getToken().then(currentToken => {
      if (currentToken) {
        console.log('currentToken: ', currentToken);
        sendTokenToServer(currentToken)
      } else {
        !this.state.rejected && this.requestPermissionUI();
      }
    })
  }

  handlePermission = () => {
    const _this = this;
    messaging.requestPermission().then(function () {
      console.log('Notification permission granted.');
      _this.setState({hidden: true})
      // Get token for current instance
      _this.getToken()
    }).catch(function (err) {
        console.log('Unable to get permission to notify.', err);
    });
  }

  handleClose = () => {
    this.setState({rejected: true, hidden: true})
  }

  requestPermissionUI = () => {
    this.setState({hidden: false})
  }

  componentDidMount() {
    navigator.serviceWorker.ready.then(() => {
      this.getToken()
    })
  }

  render() {
    const {hidden} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span>easy</span><span style={{color: '#d65a5a'}}>KU</span></h1>
        </header>
        <Nav />
        <Switch>
          {
            appRoutes.map((route, key) =>
              <Route key={key} path={route.path} exact={!!route.exact} component={route.view} />
            )
          }
        </Switch>
        <PermissionPopup hidden={hidden} handleYes={this.handlePermission} handleClose={this.handleClose}/>
      </div>
    );
  }
}


export default App;
