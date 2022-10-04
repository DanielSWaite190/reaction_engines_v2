import './App.css';
import React from 'react';
import Nav from './components/Nav'
import MainFeed from './components/MainFeed';
import 'bootstrap/dist/css/bootstrap.min.css';

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