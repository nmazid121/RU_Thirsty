import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Busch from './Busch';
import Home from './Home';
import Livingston from './Livingston';
import CollegeAve from './CollegeAve';
import CookDoug from './CookDoug';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busch"element={<Busch />} />
        <Route path="/livingston"element={<Livingston />} />
        <Route path="/collegeave"element={<CollegeAve />} />
        <Route path="/cookdoug"element={<CookDoug />} />
      </Routes>
  );
}

export default App;