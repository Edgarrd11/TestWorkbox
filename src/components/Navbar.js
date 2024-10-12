import React, { useState, useEffect } from 'react';
import logo from '../img/LogoProsperia.webp'; // Asegúrate de que la ruta sea correcta y exista

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode by adding/removing the 'dark' class to the html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-[#0D0D0D] shadow-md dark:shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-center w-full sm:w-auto">
            <img src={logo} alt="Logo" className="h-6 w-auto mx-auto sm:mx-0" />
          </div>

          {/* Dark mode toggle switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-gray-300 focus:outline-none"
          >
            {darkMode ? '🌙 Dark' : '🌞 Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
