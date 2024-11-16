import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon to match theme
const customIcon = new L.Icon({
  iconUrl: '/zet.png',
  iconSize: [32, 42],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = () => {
  // Harare coordinates
  const position = [-17.8292, 31.0522];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full h-96 mt-8"
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 
                     rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
      
      {/* Map container with custom styling */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <MapContainer 
          center={position} 
          zoom={13} 
          className="w-full h-full z-10"
          zoomControl={false}
          style={{ 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '0.5rem',
          }}
        >
          {/* Custom styled map tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            className="saturate-[0.8] contrast-[0.9] brightness-[0.9]"
          />
          
          {/* Custom marker with popup */}
          <Marker position={position} icon={customIcon}>
            <Popup className="custom-popup">
              <div className="p-2 text-center">
                <h3 className="font-semibold text-blue-600">Zettabyte Technologies</h3>
                <p className="text-sm text-gray-600">Woodlands, Waterfalls, Harare</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      {/* Custom controls */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
        <button 
          onClick={() => document.querySelector('.leaflet-container').leafletElement.zoomIn()}
          className="p-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 
                     hover:bg-white/20 transition-all duration-300 text-white"
        >
          +
        </button>
        <button 
          onClick={() => document.querySelector('.leaflet-container').leafletElement.zoomOut()}
          className="p-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 
                     hover:bg-white/20 transition-all duration-300 text-white"
        >
          -
        </button>
      </div>
      
      {/* Map overlay gradient */}
      <div className="absolute inset-0 pointer-events-none rounded-lg 
                    bg-gradient-to-t from-blue-900/20 to-transparent" />
    </motion.div>
  );
};

// Styles to be added to your global CSS
const MapStyles = () => (
  <style jsx global>{`
    .leaflet-container {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
    }
    
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
    }
    
    .leaflet-popup-tip {
      background: rgba(255, 255, 255, 0.9);
    }
    
    .custom-popup .leaflet-popup-content {
      margin: 0;
      padding: 0;
    }
  `}</style>
);

const EnhancedMapSection = () => (
  <div className="relative">
    <MapStyles />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Find Us</h2>
        <p className="text-blue-100">Visit our office in Harare, Zimbabwe</p>
      </motion.div>
      <MapComponent />
    </div>
  </div>
);

export default EnhancedMapSection;