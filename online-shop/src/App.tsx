import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="App-basic">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
