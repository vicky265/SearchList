import React, { Component } from 'react';
import './App.css';
import SearchComponent from './searchcomponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SEARCH</h1>
        <SearchComponent/>
      </div>
    );
  }
}

export default App;
