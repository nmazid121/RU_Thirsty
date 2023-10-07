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

    const navigateCollegeAve = () => {
      navigate('/collegeave');
    };

    const navigateCookDoug = () => {
      navigate('/cookdoug')
    }

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
          <button className="collegeaveButton" onClick={navigateCollegeAve}>
            CollegeAve
          </button>
          <button className="cookdougButton" onClick={navigateCookDoug}>
            CookDoug
          </button>
          </header>
        </div>
    );
}

export default Home;