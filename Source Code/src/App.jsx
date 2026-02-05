import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Objective from './components/Objective';
import Procedure from './components/Procedure';
import Validate from './components/Validate';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/validate" element={<Validate />} />
      </Routes>
    </Router>
  );
}

export default App;
