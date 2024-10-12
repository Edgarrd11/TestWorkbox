import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import ArcGISMap from './components/ArcGISMap'; // Asegúrate de que la ruta sea correcta
import ArcGISMap2 from './components/ArcGISMap2';
import PopulationChart from './components/PopulationChart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? 'dark bg-zinc-800 ' : 'bg-[#F2F0E9]'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className='dark'>
          <div className="mt-16"></div>
            <ArcGISMap darkMode={darkMode} />
            <PopulationChart/>
            <ArcGISMap2 darkMode={darkMode}/>
          </div>
      </div>
    </>
  );
};

export default App;
