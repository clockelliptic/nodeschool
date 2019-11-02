import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchFilterBox } from './Components/SearchFilterBox/SearchFilterBox'

function App() {
  return (
    <div className="App-header">
      <h1>Hello, search</h1>
      <SearchFilterBox />
    </div>
  );
}

export default App;
