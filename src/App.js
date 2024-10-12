import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import ArcGISMap from './components/ArcGISMap'; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="mt-16"></div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ArcGISMap darkMode={darkMode} />
    </div>
  );
};

export default App;
