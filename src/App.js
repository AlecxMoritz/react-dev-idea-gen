import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from './Components/UI/AppBar';
import AppBody from './Components/AppBody';
import AppHeader from './Components/AppHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <AppHeader />
        <AppBody />

      </div>
    );
  }
}

export default App;
