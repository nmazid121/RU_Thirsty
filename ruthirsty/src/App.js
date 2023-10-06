import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './Logo.PNG';
import './App.css';

function Home() {
  return <h2>Home</h2>;
}

function Busch() {
  return <h1>Busch Page yo yo test </h1>;
}

function App() {
  const navigate = useNavigate();

  const navigateBusch = () => {
    navigate('/busch');
  };

  const navigateHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt="Logo" />
        <h2>Where RU?</h2>
        <button className = "buschButton" onClick={navigateBusch}>Busch</button>
        <button className = "homeButton" onClick={navigateHome}>Home</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busch" element={<Busch />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
