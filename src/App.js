import React from 'react';
import Nav from './components/Nav'
import './App.css';
import MainFeed from './components/MainFeed';

class App extends React.Component{
  
  render(){
    return (
      <React.Fragment>
        <Nav/>
        <h1>React</h1>
        <MainFeed/>
      </React.Fragment>
    );
  }
}

export default App;