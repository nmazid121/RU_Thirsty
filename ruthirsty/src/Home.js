import React from "react";
import './App.css';
import logo from './images/Logo.PNG';
import { useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigateBusch = () => {
    navigate('/busch');
    };

    return (
    <div className="App">
        <header className="App-header">
          <img id="logo" src={logo} alt="Logo" />
          <h2>Where RU?</h2>
          <button className="buschButton" onClick={navigateBusch}>
            Busch
            </button>
          </header>
        </div>
    );
}

export default Home;