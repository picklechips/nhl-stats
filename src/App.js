import React from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Teams from './components/teams'
import Players from './components/players'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Teams />
      </div>
    </div>
  );
}

export default App;
