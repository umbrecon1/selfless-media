import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Videos from './components/pages/Videos';

import Music from './components/pages/Music';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/videos' element={ <Videos/> } />
          
          <Route path='/music' element={ <Music/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
