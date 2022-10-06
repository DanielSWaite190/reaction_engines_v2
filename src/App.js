import './App.css';
import React from 'react';
import Nav from './components/Nav'
import NewEngine from './pages/NewEngine';
import MainFeed from './components/MainFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailCard from './components/DetailCard'
import {EngineProvider} from './components/EngineContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {engines: []}
  }

  componentDidMount(){
    fetch('http://localhost:4000/engine')
    .then((res) => res.json())
    .then((data) => {
      this.setState({engines: data});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return (
      <EngineProvider value={this.state}>
        <Router>
          <main>
              <Nav/>
              <Routes>
                <Route path="/" element={<MainFeed/>} />
                <Route path="/new" element={<NewEngine />} />
                <Route path="/engine/:id" element={<DetailCard />} />
                {/* <Route path="/engine/:id/eddit" element={<EdditEngine />} /> */}
              </Routes>
          </main>
        </Router>
      </EngineProvider>
    );
  }
}

export default App;