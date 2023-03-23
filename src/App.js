import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Social from './pages/Social';



function App() {
  return (
    <div className="App">
      <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/Portfolio" 
            element={<Portfolio />} 
          />
          <Route 
            path="/Social" 
            element={<Social />} 
          />
      
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
