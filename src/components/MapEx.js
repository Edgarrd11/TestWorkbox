import React, { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "@arcgis/core/assets/esri/themes/light/main.css"; // ArcGIS styles
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Expand from "@arcgis/core/widgets/Expand";
import Search from "@arcgis/core/widgets/Search";
import Legend from "@arcgis/core/widgets/Legend";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

const MapComponent = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    let view;

    const initializeMap = async () => {
      const featureLayer = new FeatureLayer({
        portalItem: {
          id: "83c37666a059480bb8a7cb73f449ff52"
        },
        outFields: ["*"]
      });

      const map = new Map({
        basemap: "dark-gray-vector",
        layers: [featureLayer, new GraphicsLayer(), new GraphicsLayer()]
      });

      view = new MapView({
        container: mapDiv.current,
        map: map,
        zoom: 11,
        center: [-122.083, 37.3069],
        constraints: {
          maxScale: 0,
          minScale: 300000
        }
      });

      const search = new Search({ view });
      const legend = new Legend({
        view,
        layerInfos: [{ layer: featureLayer, title: "Population Density" }]
      });
      const legendExpand = new Expand({
        view,
        content: legend,
        expandTooltip: "Show Legend"
      });

      view.ui.add(legendExpand, "bottom-right");
      view.ui.add(search, "top-right");

      await view.whenLayerView(featureLayer);
      reactiveUtils.when(
        () => !view.updating,
        () => {
          console.log("Map is ready");
        }
      );
    };

    initializeMap();

    return () => {
      if (!!view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div ref={mapDiv} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
