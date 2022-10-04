import React from 'react';
import Nav from './components/Nav'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Nav/>
        <h1>React</h1>
      </React.Fragment>
    );
  }
}

export default App;