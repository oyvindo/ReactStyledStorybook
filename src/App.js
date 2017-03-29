import React, { Component } from 'react';
import OoCheckBox from './Components/OoCheckBox';
import Pagination from './Components/Pagination'
import logo from './logo.svg';
import './App.css';
import FontAwesome from 'react-fontawesome';


class App extends Component {
    render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              <OoCheckBox
                  title="Fin tittel som er lang"
                  size="small"
                  //special="red"
                  value="true"
              />
          </div><FontAwesome name='rocket' />
          <div>
              <OoCheckBox
                  title="tom"
                  size=""
                  //special="red"
                  value="true"
              />
          </div>
          <Pagination
              numberOfPages="20"
              currentPage="7"
              onChangePage=""
          />
      </div>
    );
  }
}

export default App;
