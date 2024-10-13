import React, { useEffect, useState } from 'react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function PopulationChart() {
  const [populationData, setPopulationData] = useState({
    female: [],
    male: []
  });

  useEffect(() => {
    const layerUrl = 'https://services6.arcgis.com/cdylwBTTDF2F9FTY/ArcGIS/rest/services/BCS/FeatureServer';
    const featureLayer = new FeatureLayer({
      url: layerUrl,
    });

    async function queryPopulationByAgeGroup() {
      const query = featureLayer.createQuery();
      query.outStatistics = [
        // Población femenina
        { onStatisticField: "POB44", outStatisticFieldName: "sum_female_0_4", statisticType: "sum" },
        { onStatisticField: "POB68", outStatisticFieldName: "sum_female_5_9", statisticType: "sum" },
        { onStatisticField: "POB69", outStatisticFieldName: "sum_female_10_14", statisticType: "sum" },
        { onStatisticField: "POB70", outStatisticFieldName: "sum_female_15_19", statisticType: "sum" },
        { onStatisticField: "POB71", outStatisticFieldName: "sum_female_20_24", statisticType: "sum" },
        { onStatisticField: "POB72", outStatisticFieldName: "sum_female_25_29", statisticType: "sum" },
        { onStatisticField: "POB73", outStatisticFieldName: "sum_female_30_34", statisticType: "sum" },
        { onStatisticField: "POB74", outStatisticFieldName: "sum_female_35_39", statisticType: "sum" },
        { onStatisticField: "POB75", outStatisticFieldName: "sum_female_40_44", statisticType: "sum" },
        { onStatisticField: "POB76", outStatisticFieldName: "sum_female_45_49", statisticType: "sum" },
        { onStatisticField: "POB77", outStatisticFieldName: "sum_female_50_54", statisticType: "sum" },
        { onStatisticField: "POB78", outStatisticFieldName: "sum_female_55_59", statisticType: "sum" },
        { onStatisticField: "POB58", outStatisticFieldName: "sum_female_60_64", statisticType: "sum" },
        { onStatisticField: "POB79", outStatisticFieldName: "sum_female_65_69", statisticType: "sum" },
        { onStatisticField: "POB75", outStatisticFieldName: "sum_female_70_74", statisticType: "sum" },
        { onStatisticField: "POB81", outStatisticFieldName: "sum_female_75_79", statisticType: "sum" },
        { onStatisticField: "POB82", outStatisticFieldName: "sum_female_80_84", statisticType: "sum" },
        // Población masculina
        { onStatisticField: "POB86", outStatisticFieldName: "sum_male_0_4", statisticType: "sum" },
        { onStatisticField: "POB109", outStatisticFieldName: "sum_male_5_9", statisticType: "sum" },
        { onStatisticField: "POB110", outStatisticFieldName: "sum_male_10_14", statisticType: "sum" },
        { onStatisticField: "POB111", outStatisticFieldName: "sum_male_15_19", statisticType: "sum" },
        { onStatisticField: "POB112", outStatisticFieldName: "sum_male_20_24", statisticType: "sum" },
        { onStatisticField: "POB113", outStatisticFieldName: "sum_male_25_29", statisticType: "sum" },
        { onStatisticField: "POB114", outStatisticFieldName: "sum_male_30_34", statisticType: "sum" },
        { onStatisticField: "POB115", outStatisticFieldName: "sum_male_35_39", statisticType: "sum" },
        { onStatisticField: "POB116", outStatisticFieldName: "sum_male_40_44", statisticType: "sum" },
        { onStatisticField: "POB117", outStatisticFieldName: "sum_male_45_49", statisticType: "sum" },
        { onStatisticField: "POB118", outStatisticFieldName: "sum_male_50_54", statisticType: "sum" },
        { onStatisticField: "POB119", outStatisticFieldName: "sum_male_55_59", statisticType: "sum" },
        { onStatisticField: "POB99", outStatisticFieldName: "sum_male_60_64", statisticType: "sum" },
        { onStatisticField: "POB120", outStatisticFieldName: "sum_male_65_69", statisticType: "sum" },
        { onStatisticField: "POB121", outStatisticFieldName: "sum_male_70_74", statisticType: "sum" },
        { onStatisticField: "POB122", outStatisticFieldName: "sum_male_75_79", statisticType: "sum" },
        { onStatisticField: "POB123", outStatisticFieldName: "sum_male_80_84", statisticType: "sum" }
      ];

      // Ejecutar la consulta
      featureLayer.queryFeatures(query)
        .then((response) => {
          const stats = response.features.map(feature => feature.attributes);
          
          const femalePopulation = stats.map(stat => [
            stat.sum_female_0_4 || 0, 
            stat.sum_female_5_9 || 0, 
            stat.sum_female_10_14 || 0, 
            stat.sum_female_15_19 || 0, 
            stat.sum_female_20_24 || 0, 
            stat.sum_female_25_29 || 0, 
            stat.sum_female_30_34 || 0, 
            stat.sum_female_35_39 || 0, 
            stat.sum_female_40_44 || 0, 
            stat.sum_female_45_49 || 0, 
            stat.sum_female_50_54 || 0, 
            stat.sum_female_55_59 || 0, 
            stat.sum_female_60_64 || 0, 
            stat.sum_female_65_69 || 0, 
            stat.sum_female_70_74 || 0, 
            stat.sum_female_75_79 || 0, 
            stat.sum_female_80_84 || 0
          ]);

          const malePopulation = stats.map(stat => [
            stat.sum_male_0_4 || 0, 
            stat.sum_male_5_9 || 0, 
            stat.sum_male_10_14 || 0, 
            stat.sum_male_15_19 || 0, 
            stat.sum_male_20_24 || 0, 
            stat.sum_male_25_29 || 0, 
            stat.sum_male_30_34 || 0, 
            stat.sum_male_35_39 || 0, 
            stat.sum_male_40_44 || 0, 
            stat.sum_male_45_49 || 0, 
            stat.sum_male_50_54 || 0, 
            stat.sum_male_55_59 || 0, 
            stat.sum_male_60_64 || 0, 
            stat.sum_male_65_69 || 0, 
            stat.sum_male_70_74 || 0, 
            stat.sum_male_75_79 || 0, 
            stat.sum_male_80_84 || 0
          ]);

          // Establecer los datos en el estado
          setPopulationData({
            female: femalePopulation,
            male: malePopulation
          });

          // Imprimir en consola los arrays de población
          console.log('Población Femenina:', femalePopulation);
          console.log('Población Masculina:', malePopulation);
        })
        .catch((error) => {
          console.error('Error fetching population data:', error);
          setPopulationData({
            female: [],
            male: []
          });
        });
    }

    queryPopulationByAgeGroup(); // Llamar a la función para ejecutar la consulta

  }, []);

  return (
    <div>
      <h2>Datos de Población:</h2>
      <h3>Población Femenina</h3>
      <pre>{JSON.stringify(populationData.female, null, 2)}</pre>
      <h3>Población Masculina</h3>
      <pre>{JSON.stringify(populationData.male, null, 2)}</pre>
    </div>
  );
}

export default PopulationChart;
