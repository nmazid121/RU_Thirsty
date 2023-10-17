import React from 'react';
import './App.css';
import logo from './images/Logo.PNG';
import waterIcon from './images/waterIcon.png'
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '90%',
    height: '400px', // Adjust the height according to your design
  };

function Busch() {
    
    const center = { lat: 40.5221, lng: -74.4572 }; // Default coordinates for Busch Campus, where map starts
    const [markers, setMarkers] = React.useState([]);
    const onMapClick = (event) => {
        setMarkers([...markers, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
      }; // sets marker down when user clicks on map

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
            <LoadScript googleMapsApiKey=""> 
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onClick={onMapClick}
                >
                {markers.map((marker, index) => (
                    <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} 
                    icon = {{url: waterIcon, scaledSize: new window.google.maps.Size(50, 50)}} />
                ))}
                </GoogleMap>
            </LoadScript>
            </header>
        </div>
    )
}

export default Busch;