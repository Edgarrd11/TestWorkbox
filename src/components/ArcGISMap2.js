import React, { useEffect } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const ArcGISMap2 = ({ darkMode }) => {
  useEffect(() => {
    const map = new Map({
      basemap: "dark-gray-vector",
    });
    // Crear la vista del mapa
    const view = new MapView({
      container: 'arcgisMapDiv2',
      map: map,
      zoom: 6.8,
      center: [-110, 25], 
    });

    // Capa de municipios
    const municipiosLayer = new FeatureLayer({
      url: "https://services6.arcgis.com/cdylwBTTDF2F9FTY/ArcGIS/rest/services/BCS/FeatureServer"
    });

    // Capa de proyectos
    const proyectosLayer = new FeatureLayer({
      url: "https://services6.arcgis.com/cdylwBTTDF2F9FTY/ArcGIS/rest/services/CAPA_PROYECTOS/FeatureServer"
    });

    // Agregar las capas al mapa
    map.add(municipiosLayer);
    map.add(proyectosLayer);




    return () => {
      if (view) {
        view.destroy(); // Limpiar la vista al desmontar el componente
      }
    };
  }, []);

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 py-6 mt-16'>
        <div id="arcgisMapDiv2" style={{ width: '100%', height: '100vh' }}></div>
        <div className={`top-10 left-10 ${darkMode ? 'dark:bg-[#0D0D0D] text-white' : 'bg-white text-black'} p-4 shadow-lg z-50 rounded`}>
            <h1 className="text-lg font-bold mb-2">Gráfica 1 – Comparativa población entre hombres y mujeres por
            edad (Capa de Municipios)</h1>
        </div>
      </div>
    </>
  );
};

export default ArcGISMap2;