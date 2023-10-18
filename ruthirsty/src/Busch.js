import React, { useEffect, useRef } from 'react';
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
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const confirmationTimeout = useRef(null);

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(-1);
    };

    const onMapClick = (event) => {
        const newMarker = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        setMarkers([...markers, newMarker]);
        setSelectedMarker(newMarker);
        setLocationName('');
        setLocationDescription('');
    };

    const handleOkClick = () => {
        setShowConfirmation(true);
        setSelectedMarker(null);
        if (confirmationTimeout.current) {
            clearTimeout(confirmationTimeout.current);
        }
        confirmationTimeout.current = setTimeout(() => {
            setShowConfirmation(false);
        }, 2000);
    };

    const handleInfoWindowClose = () => {
        setMarkers(prevMarkers => {
            // Remove the last marker
            const updatedMarkers = [...prevMarkers];
            updatedMarkers.pop();
            return updatedMarkers;
        });
        setSelectedMarker(null);
    };

    useEffect(() => {
        return () => {
            if (confirmationTimeout.current) {
                clearTimeout(confirmationTimeout.current);
            }
        };
    }, []);

    return (
        <div className="Busch">
            <header className="App-header">
                <img id="logo" src={logo} alt="Logo" />
                <h2>You are at Busch</h2>
                {showConfirmation && 
                    <div style={{ 
                        position: 'fixed', 
                        zIndex: 1000,
                        top: '10%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: 'blue', 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        backgroundColor: 'white', 
                        padding: '10px', 
                        borderRadius: '8px'
                    }}>
                        Water fountain has been marked!
                    </div>
                }
                <button className="homeButton" onClick={navigateHome}>
                    Home
                </button>
                <LoadScript googleMapsApiKey="PASTE API KEY HERE">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        onClick={onMapClick}
                        mapTypeId={'satellite'}
                    >
                        {markers.map((marker, index) => (
                            <Marker 
                                key={index} 
                                position={marker} 
                                onClick={() => {
                                    setSelectedMarker(marker);
                                }}
                                icon={{url: waterIcon, scaledSize: new window.google.maps.Size(50, 50) }}
                            />
                        ))}
                        {selectedMarker && (
                            <InfoWindow
                                position={selectedMarker}
                                onCloseClick={handleInfoWindowClose}
                            >
                                <div style={{ fontFamily: 'Times New Roman', width: '200px' }}>
                                    <input 
                                        type="text" 
                                        value={locationName}
                                        onChange={(e) => setLocationName(e.target.value)}
                                        placeholder="What Building?"
                                    />
                                    <br />
                                    <input 
                                        type="text" 
                                        value={locationDescription}
                                        onChange={(e) => setLocationDescription(e.target.value)}
                                        placeholder="Description of Location"
                                    />
                                    <br />
                                    <button onClick={handleOkClick}>OK</button>
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
