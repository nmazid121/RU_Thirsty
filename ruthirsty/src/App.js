import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Busch from './Busch';
import Home from './Home';

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/busch"element={<Busch />} />
      </Routes>
  );
}

export default App;
