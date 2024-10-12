import React, { useEffect, useState } from 'react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

const FeatureLayerDisplay = () => {
  const [populationData, setPopulationData] = useState('');

  useEffect(() => {
    const layerUrl = 'https://services6.arcgis.com/cdylwBTTDF2F9FTY/ArcGIS/rest/services/BCS/FeatureServer';

    const featureLayer = new FeatureLayer({
      url: layerUrl,
    });

    function queryPopulationByAgeGroup() {
      const query = featureLayer.createQuery();
      query.outStatistics = [
        {
          onStatisticField: "POB44", // Población femenina de 0 a 4 años
          outStatisticFieldName: "sum_female_0_4",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB68", // Población femenina de 5 a 9 años
          outStatisticFieldName: "sum_female_5_9",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB69", // Población femenina de 10 a 14 años
          outStatisticFieldName: "sum_female_10_14",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB70", // Población femenina de 15 a 19 años
          outStatisticFieldName: "sum_female_15_19",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB71", // Población femenina de 20 a 24 años
          outStatisticFieldName: "sum_female_20_24",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB72", // Población femenina de 25 a 29 años
          outStatisticFieldName: "sum_female_25_29",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB73", // Población femenina de 30 a 34 años
          outStatisticFieldName: "sum_female_30_34",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB74", // Población femenina de 35 a 39 años
          outStatisticFieldName: "sum_female_35_39",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB75", // Población femenina de 40 a 44 años
          outStatisticFieldName: "sum_female_40_44",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB76", // Población femenina de 45 a 49 años
          outStatisticFieldName: "sum_female_45_49",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB77", // Población femenina de 50 a 54 años
          outStatisticFieldName: "sum_female_50_54",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB78", // Población femenina de 50 a 59 años
          outStatisticFieldName: "sum_female_55_59",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB58", // Población femenina de 60 a 64 años
          outStatisticFieldName: "sum_female_60_64",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB79", // Población femenina de 65 a 69 años
          outStatisticFieldName: "sum_female_65_69",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB75", // Población femenina de 70 a 74 años
          outStatisticFieldName: "sum_female_70_74",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB81", // Población femenina de 75 a 79 años
          outStatisticFieldName: "sum_female_75_79",
          statisticType: "sum"
        },
        {
          onStatisticField: "POB82", // Población femenina de 80 a 84 años
          outStatisticFieldName: "sum_female_80_84",
          statisticType: "sum"
        },
        // Male
        {
            onStatisticField: "POB86", // Población masculina de 0 a 4 años
            outStatisticFieldName: "sum_male_0_4",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB109", // Población masculina de 5 a 9 años
            outStatisticFieldName: "sum_male_5_9",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB110", // Población masculina de 10 a 14 años
            outStatisticFieldName: "sum_male_10_14",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB111", // Población masculina de 15 a 19 años
            outStatisticFieldName: "sum_male_15_19",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB112", // Población masculina de 20 a 24 años
            outStatisticFieldName: "sum_male_20_24",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB113", // Población masculina de 25 a 29 años
            outStatisticFieldName: "sum_male_25_29",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB114", // Población masculina de 30 a 34 años
            outStatisticFieldName: "sum_male_30_34",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB115", // Población masculina de 35 a 39 años
            outStatisticFieldName: "sum_male_35_39",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB116", // Población masculina de 40 a 44 años
            outStatisticFieldName: "sum_male_40_44",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB117", // Población masculina de 45 a 49 años
            outStatisticFieldName: "sum_male_45_49",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB118", // Población masculina de 50 a 54 años
            outStatisticFieldName: "sum_male_50_54",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB119", // Población masculina de 55 a 59 años
            outStatisticFieldName: "sum_male_55_59",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB99", // Población masculina de 60 a 64 años
            outStatisticFieldName: "sum_male_60_64",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB120", // Población masculina de 65 a 69 años
            outStatisticFieldName: "sum_male_65_69",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB121", // Población masculina de 70 a 74 años
            outStatisticFieldName: "sum_male_70_74",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB122", // Población masculina de 60 a 64 años
            outStatisticFieldName: "sum_male_75_79",
            statisticType: "sum"
        },
        {
            onStatisticField: "POB123", // Población masculina de 60 a 64 años
            outStatisticFieldName: "sum_male_80_84",
            statisticType: "sum"
        },

      ];

      // Ejecutar la consulta
      featureLayer.queryFeatures(query)
        .then((response) => {
          const stats = response.features.map(feature => feature.attributes);
          let resultString = '';
          stats.forEach(stat => {
            resultString += `
              0-4 años: ${stat.sum_female_0_4 || 0}, 
              5-9 años: ${stat.sum_female_5_9 || 0}, 
              10-14 años: ${stat.sum_female_10_14 || 0}, 
              15-19 años: ${stat.sum_female_15_19 || 0}, 
              20-24 años: ${stat.sum_female_20_24 || 0}, 
              25-29 años: ${stat.sum_female_25_29 || 0}, 
              30-34 años: ${stat.sum_female_30_34 || 0}, 
              35-39 años: ${stat.sum_female_35_39 || 0}, 
              40-44 años: ${stat.sum_female_40_44 || 0}, 
              45-49 años: ${stat.sum_female_45_49 || 0}, 
              50-54 años: ${stat.sum_female_50_54 || 0}, 
              55-59 años: ${stat.sum_female_55_59 || 0}, 
              60-64 años: ${stat.sum_female_60_64 || 0}, 
              65-69 años: ${stat.sum_female_65_69 || 0}, 
              70-74 años: ${stat.sum_female_70_74 || 0}, 
              75-79 años: ${stat.sum_female_75_79 || 0}, 
              80-84 años: ${stat.sum_female_80_84 || 0}
              <br />
            `;
          });

          // Establecer los datos en el estado
          setPopulationData(resultString);
        })
        .catch((error) => {
          console.error('Error fetching population data:', error);
          setPopulationData('Error al cargar los datos.');
        });
    }

    queryPopulationByAgeGroup(); // Llamar a la función para ejecutar la consulta
  }, []);

  return (
    <div>
      <h2>Datos de Población Femenina por Grupo de Edad:</h2>
      <p dangerouslySetInnerHTML={{ __html: populationData || 'Cargando datos...' }}></p>
    </div>
  );
};

export default FeatureLayerDisplay;
