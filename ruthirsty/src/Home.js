import React from "react";
import './App.css';
import logo from './images/Logo.PNG';
import { useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigateBusch = () => {
    navigate('/busch');
    };

    const navigateLivingston = () => {
    navigate('/livingston');
    };

    return (
    <div className="App">
        <header className="App-header">
          <img id="logo" src={logo} alt="Logo" />
          <h2>Where RU?</h2>
          <button className="buschButton" onClick={navigateBusch}>
            Busch
            </button>
          <button className="livingstonButton" onClick={navigateLivingston}>
            Livingston
            </button>
          </header>
        </div>
    );
}

export default Home;