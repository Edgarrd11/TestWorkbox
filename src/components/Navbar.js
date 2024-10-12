import React from 'react';
import logo from '../img/LogoProsperia.webp'; // Asegúrate de que la ruta sea correcta

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[#0D0D0D] shadow-md dark:shadow-lg z-50">
      <div className="max-w-8xl mx-auto px-4 mb-3 sm:px-6 lg:px-8">
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

