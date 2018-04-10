import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <OwnedBooksDashboard />
      </div>
    );
  }
}

export default App;
