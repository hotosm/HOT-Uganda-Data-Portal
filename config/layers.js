var LAYERS = {
  "village-boundaries": {
    "label": "Village Boundaries",
    "source": {
      "type": "geojson",
      "data": "data/villages.geojson"
    },
    "type": "line",
    "paint": {
      "line-width": 2,
      "line-color": "#444",
      "line-opacity": 0.6
    },
    "visible": false
  },
  
  "operational-waterpoints": {
    "label": "Operational Water Points",
    "source": {
      "type": "geojson",
      "data": "data/operational_water_points.geojson",
    },
    "icon":"operational",
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[0, 0], [8, 5], [9, 10]]
      },
      "text-field": "{name}",
      "text-offset": [0, 2],
      "icon-image": "hospital-1190",
      "icon-allow-overlap": true,
      "text-transform": "uppercase"
    },
    "visible": true,

  },

  "non-operational-waterpoints": {
    "label": "Non Operational Water Points",
     "icon":"non_operational",
    "source": {
      "type": "geojson",
      "data": "data/non_operational_water_points.geojson",
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },

    "popup": {
      "body": "<b> {name} point </b>"
    },
    "layout": {
      "text-size": {
        "stops": [[0, 0], [8, 5], [9, 10]]
      },
      "text-field": "{name} ",
      "text-offset": [0, 2],
      "icon-image": "hospital-1190",
      "icon-allow-overlap": true,
      "text-transform": "uppercase"
    },
    "visible": false,

  },
  
};