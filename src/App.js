import './App.css';
import React from 'react';
import Nav from './components/Nav'
import NewEngine from './pages/NewEngine';
import MainFeed from './components/MainFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component{

  render(){
    return (
      <Router>
        <main>
            <Nav/>
            <Routes>
              <Route path="/" element={<MainFeed/>} />
              <Route path="/new" element={<NewEngine />} />
              {/* <Route path="/engine/:id" element={<DetailCard />} /> */}
              {/* <Route path="/engine/:id/eddit" element={<EdditEngine />} /> */}
            </Routes>
        </main>
      </Router>
    );
  }
}

export default App;