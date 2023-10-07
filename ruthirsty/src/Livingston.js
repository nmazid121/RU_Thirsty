import React from 'react';
import './App.css';
import logo from './images/Logo.PNG';
import { useNavigate } from 'react-router-dom';


function Livingston() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(-1);
    };

    return (
        <div className = "Livingston"> 
            <header className="App-header">
            <img id="logo" src={logo} alt="Logo" />
            <h2>You are at Livingston</h2>
            <button className="homeButton" onClick={navigateHome}>
            Home
            </button>
            </header>
        </div>
    )
}

export default Livingston;