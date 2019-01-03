import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
            <h1>3 different blocks</h1>
            <div className="row">
                  <div className="col-md-4" style={{backgroundColor: "#fff999"}}>
                      Left
                  </div>
                  <div className="col-md-4" style={{backgroundColor: "#fdf"}}>
                      Center
                  </div>
                  <div className="col-md-4" style={{backgroundColor: "#777"}}>
                      Right
                  </div>
            </div>
      </div>

    );
  }
}

export default App;
