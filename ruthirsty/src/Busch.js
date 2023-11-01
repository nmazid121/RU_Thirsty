import React, { useEffect, useRef } from 'react';
import './App.css';
import logo from './images/Logo.PNG';
import waterIcon from './images/waterIcon.png';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '90%',
    height: '700px',
};

function Busch() {
    const initialCenter = { lat: 40.5221, lng: -74.4572 };
    const [center] = React.useState(initialCenter);
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
        // Capture latitude and longitude of the marker
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
    
        // Create a copy of the existing markers array
        const updatedMarkers = [...markers];
    
        // Create a new marker object
        const newMarker = { lat, lng, name: locationName, description: locationDescription };

    
        // Add the new marker to the existing array
        updatedMarkers.push(newMarker);
    
        // Update the markers state with the new array
        setMarkers(updatedMarkers);
    
        setSelectedMarker(newMarker);
        setLocationName('');
        setLocationDescription('');
        console.log("Markers array: ", markers);
    };    
    

    const handleOkClick = () => {
        setShowConfirmation(true);
        if (!selectedMarker) {
            return;
        }
    
        // Update the selected marker's properties with locationName and locationDescription
        const updatedMarkers = markers.map((marker) => {
            if (marker === selectedMarker) {
                return {
                    ...marker,
                    name: locationName,
                    description: locationDescription,
                };
            }
            return marker;
        });        
    
        setMarkers(updatedMarkers);
        setSelectedMarker(null);
    
        if (confirmationTimeout.current) {
            clearTimeout(confirmationTimeout.current);
        }
        confirmationTimeout.current = setTimeout(() => {
            setShowConfirmation(false);
        }, 2000);
        console.log("Markers array: ", updatedMarkers);
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

    const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setMarkers([...markers, userPos]); 
              setSelectedMarker(userPos); 
            },
            () => {
              console.error("Error: The Geolocation service failed.");
            }
          );
        } else {
          console.error("Error: Your browser doesn't support geolocation.");
        }
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
                <h1>You are at Busch</h1>
                {showConfirmation && 
                    <div style={{ 
                        position: 'fixed', 
                        zIndex: 1000,
                        top: '10%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: '#2C2C2C', 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        backgroundColor: '#E0F7FA', 
                        padding: '20px', 
                        borderRadius: '15px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        Water fountain has been marked!
                    </div>
                }
               <div style={{
                     display: 'flex',       // Using flex for easier alignment and spacing
                     justifyContent: 'center',  // Center-align the buttons horizontally
                     gap: '10px'              // Spacing between the buttons
                }}>
                    <button className="homeButton" onClick={navigateHome}>
                    Home
                </button>
                </div>
                <button className = "ShowMyLocation"
                    onClick={getUserLocation} 
                    style={{ 
                        backgroundColor: '#00838F',  // Background color
                        color: 'white',  // Text color
                        padding: '10px 20px',  // Padding
                        borderRadius: '8px',  // Rounded corners
                        border: 'none',  // Remove border
                        cursor: 'pointer',  // Cursor pointer on hover
                        fontSize: '16px',  // Font size
                        fontWeight: 'bold',  // Bold text
                        transition: 'background-color 0.3s',  // Transition effect
                        marginBottom: '10px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#006064'}  // Darker background on hover
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00838F'}  // Restore background color
                >Show My Location</button>
                <LoadScript googleMapsApiKey="AIzaSyBEdVNIaYp-brYH2bDBj9b5H82a_ImiACc">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center} // Use the separate center state here
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
                                <div style={{ 
                                    fontFamily: 'Courier New, monospace', 
                                    backgroundColor: '#E0F7FA', 
                                    padding: '10px', 
                                    borderRadius: '8px', 
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
                                }}>
                                    <input 
                                        style={{ width: '100%', marginBottom: '10px', padding: '5px', borderRadius: '4px', fontFamily:'Courier New, monospace, Arial, sans-serif',color: '#000000',fontWeight: 'bold' }}
                                        type="text"
                                        value={locationName}
                                        onChange={(e) => setLocationName(e.target.value)}
                                        placeholder="What Building?"
                                    />
                                    <br />
                                    <textarea 
                                        style={{ width: '100%', padding: '5px', borderRadius: '4px' }}
                                        type="text" 
                                        value={locationDescription}
                                        onChange={(e) => setLocationDescription(e.target.value)}
                                        placeholder="Description of Location(ie. landmarks and floor number?)"
                                        rows={3}
                                    />
                                    <br />

                                    
                                    <button 
                                        style={{ 
                                            marginTop: '10px', 
                                            backgroundColor: '#00838F', 
                                            color: 'white', 
                                            padding: '0 15px',  // Adjusted vertical padding to zero
                                            lineHeight: '24px', // This can help center the text vertically
                                            height: '24px',     // Explicit height for the button
                                            borderRadius: '4px', 
                                            border: 'none', 
                                            cursor: 'pointer', 
                                            fontSize: '12px',
                                            width: '60px', 
                                            textAlign: 'center' // Ensure text is centered horizontally
                                        }}
                                        onClick={handleOkClick}
                                    >
                                        OK
                                    </button>
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