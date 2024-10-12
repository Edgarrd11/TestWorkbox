import React, { useEffect } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const ArcGISMap = ({ darkMode }) => {
  useEffect(() => {
    const map = new Map({
      basemap: "streets-navigation-vector",
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

    // Crear la vista del mapa
    const view = new MapView({
      container: 'arcgisMapDiv',
      map: map,
      zoom: 6.8,
      center: [-110, 25], 
    });

    // Manejar el cambio en los checkboxes
    const municipiosCheckbox = document.getElementById("layer1");
    const proyectosCheckbox = document.getElementById("layer2");

    if (municipiosCheckbox) {
      municipiosCheckbox.addEventListener("change", function(event) {
        municipiosLayer.visible = event.target.checked; // Actualiza la visibilidad de la capa de municipios
      });
    }

    if (proyectosCheckbox) {
      proyectosCheckbox.addEventListener("change", function(event) {
        proyectosLayer.visible = event.target.checked; // Actualiza la visibilidad de la capa de proyectos
      });
    }

    return () => {
      if (view) {
        view.destroy(); // Limpiar la vista al desmontar el componente
      }
      // Limpiar los event listeners
      if (municipiosCheckbox) {
        municipiosCheckbox.removeEventListener("change", () => {});
      }
      if (proyectosCheckbox) {
        proyectosCheckbox.removeEventListener("change", () => {});
      }
    };
  }, []);

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 py-6'>
      <div className={`top-10 left-10 ${darkMode ? 'dark:bg-[#0D0D0D] text-white' : 'bg-white text-black'} p-4 shadow-lg z-50 rounded`}>
        <h2 className="text-lg font-bold mb-2">Selecciona las Capas:</h2>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="layer1" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked />
          <label htmlFor="layer1" className="ml-2">Municipios</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="layer2" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked />
          <label htmlFor="layer2" className="ml-2">Proyectos</label>
        </div>
      </div>
        <div id="arcgisMapDiv" style={{ width: '100%', height: '100vh' }}></div>
      </div>
    </>
  );
};

export default ArcGISMap;
