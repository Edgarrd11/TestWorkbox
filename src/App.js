import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import ArcGISMap from './components/ArcGISMap'; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? 'dark bg-black' : ''}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className='dark'>
          <div className="mt-16"></div>
            <ArcGISMap darkMode={darkMode} />
          </div>
      </div>
    </>
  );
};

export default App;
