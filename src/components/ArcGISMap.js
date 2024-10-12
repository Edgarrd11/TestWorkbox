import React, { useEffect } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';

const ArcGISMap = () => {
  useEffect(() => {
    var map = new Map({
        basemap: "streets-navigation-vector"
    });
    // Crear la vista del mapa
    var view = new MapView({
        container: 'arcgisMapDiv',
        map: map,
        zoom: 6.8,
        center: [-110, 25], 
    });

    return () => {
      if (view) {
        view.destroy(); // Limpiar la vista al desmontar el componente
      }
    };
  }, []);

  return (
    <div id="arcgisMapDiv" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default ArcGISMap;
