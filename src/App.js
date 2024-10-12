import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ArcGISMap from './components/ArcGISMap';

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-gray-950 dark:text-gray-300 min-h-screen">
      <Navbar />
      <div className="h-screen">
        <ArcGISMap></ArcGISMap>
      </div>
    </div>
  );
}

export default App;
