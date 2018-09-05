import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const url = 'https://kerala-university-api.herokuapp.com'

class App extends Component {
  state = {
    datas: []
  }
  componentDidMount() {
    fetch(url).then(resp => {
      resp.json().then(datas => {
        this.setState({datas})
      })
    })
  }
  render() {
    const {datas} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">University results</h1>
        </header>
        <div className="App-intro">
          {
            datas.map(data => 
              <div className="ListItem">
                <h4 className="Text">{data.title}</h4>
                <a className="DownloadButton" href={data.link}><button>Download</button></a>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
