import React from 'react';
import './App.css';
import logo from './images/Logo.PNG';
import waterIcon from './images/waterIcon.png';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';



const containerStyle = {
    width: '90%',
    height: '400px',
};

function Busch() {
    const center = { lat: 40.5221, lng: -74.4572 };
    const [markers, setMarkers] = React.useState([]);
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    const [locationName, setLocationName] = React.useState('');
    const [locationDescription, setLocationDescription] = React.useState('');

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(-1);
    };

    const onMapClick = (event) => {
        const newMarker = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        setMarkers([...markers, newMarker]);
        setSelectedMarker(newMarker);
    };

    const handleCancel = () => {
        setSelectedMarker(null);  // Hide the InfoWindow when cancel button is clicked
    };

    return (
        <div className="Busch">
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
                            <Marker 
                                key={index} 
                                position={{ lat: marker.lat, lng: marker.lng }} 
                                onClick={() => setSelectedMarker(marker)}
                                icon = {{url: waterIcon, scaledSize: new window.google.maps.Size(50, 50) }}
                            />
                        ))}
                        {selectedMarker && (
                            <InfoWindow
                                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                                onCloseClick={() => setSelectedMarker(null)}
                            >
                                <div>
                                    <input 
                                        type="text" 
                                        value={locationName}
                                        onChange={(e) => setLocationName(e.target.value)}
                                        placeholder="Insert Location Here"
                                    />
                                    <br />
                                    <input 
                                        type="text" 
                                        value={locationDescription}
                                        onChange={(e) => setLocationDescription(e.target.value)}
                                        placeholder="Description of Location"
                                    />
                                    <br />
                                    <button onClick={handleCancel}>X</button>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
            </header>
        </div>
    );
}

export default Busch;
