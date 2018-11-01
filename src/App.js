import React, { Component } from 'react';
import './App.css';
import Skeleton from './components/Skeleton';
import SearchForm from './components/SearchForm';
import Follow from './components/Follow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Skeleton />
        <SearchForm />
        <Follow />
      </div>
    );
  }
}

export default App;
