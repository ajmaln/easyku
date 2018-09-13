import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactLoading from 'react-loading';

const url = 'https://kerala-university-api.herokuapp.com/results'

class App extends Component {
  state = {
    datas: [],
    loading: true,
  }

  componentDidMount() {
    //getToken();
    fetch(url).then(resp => {
      resp.json().then(datas => {
        this.setState({ datas, loading: false })
      })
    })
  }

  header = React.createRef();

  render() {
    const { datas, loading } = this.state;

    return (
      <div className="App">
        <header ref={this.header} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">University Results</h1>
        </header>
        <div className="App-intro">
          {
            loading ?
              <div className='container' style={{ minHeight: window.innerHeight - 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <ReactLoading type={'spin'} color={'blue'} height={50} width={50} className='loader' />
              </div>
              :
              <div>
                {
                  datas.map((data, key) =>
                    <div key={key} className="ListItem">
                      <h4 className="Text">{data.title}</h4>
                      <a className="DownloadButton" href={data.link}><button>Download</button></a>
                    </div>
                  )
                }
              </div>
          }
        </div>
      </div>
    );
  }
}


export default App;
