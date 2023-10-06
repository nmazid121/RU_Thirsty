import React from 'react';
import './App.css';
import logo from './images/Logo.PNG';
import { useNavigate } from 'react-router-dom';


function Busch() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(-1);
    };

    return (
        <div className = "Busch"> 
            <header className="App-header">
            <img id="logo" src={logo} alt="Logo" />
            <h2>You are at Busch</h2>
            <button className="homeButton" onClick={navigateHome}>
            Home
            </button>
            </header>
        </div>
    )
}

export default Busch;