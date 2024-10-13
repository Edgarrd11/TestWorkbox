// HorizontalBarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que se usarán en Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  // Datos de ejemplo













  
  const malePopulation = [1000, 2000, 1500, 3000, 2500, 1800, 2200, 2700, 1900, 2300, 1200, 1000, 800, 500, 300, 100];
  const femalePopulation = [950, 2100, 1400, 2900, 2400, 1700, 2300, 2600, 2000, 2400, 1100, 900, 700, 400, 200, 80];

  // Rango de edad (0 a 85 en intervalos de 5 años)
  const ageLabels = Array.from({ length: 18 }, (_, i) => `${i * 5} - ${i * 5 + 4}`);

  // Datos del gráfico
  const data = {
    labels: ageLabels,
    datasets: [
      {
        label: "Población Masculina",
        data: malePopulation,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        // Se ajusta el `barThickness` para mantener el tamaño de las barras
        barThickness: 15,
      },
      {
        label: "Población Femenina",
        data: femalePopulation.map(value => -value), // Invertir los valores para mostrar en el lado derecho
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        // Se ajusta el `barThickness` para mantener el tamaño de las barras
        barThickness: 15,
      }
    ]
  };

  // Opciones del gráfico
  const options = {
    indexAxis: 'y', // Hace que las barras sean horizontales
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comparación de Población Masculina vs Femenina (0 a 85 años)",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        // Configura la escala para mostrar las barras en lados opuestos
        ticks: {
          callback: function(value) {
            return Math.abs(value); // Mostrar valores absolutos en los ticks
          }
        }
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <h2>Comparación de Población</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
