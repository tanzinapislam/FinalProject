// var map = new mapboxgl.Map({
//   container: 'map',
//   center: [-122.420679, 37.772537],
//   zoom: 13,
//   style: style_object,
//   hash: true
// });
//
// var marker = new mapboxgl.Marker()
//   .setLngLat([39.9, 75.1]);
//   .addTo(map);

mapboxgl.accessToken = 'pk.eyJ1IjoidGFuemluYXBpc2xhbSIsImEiOiJjajEybmhmaHkwNndvMzNuemNnazVnNWF2In0.17WcDTx0tqhw2jd8avt9Gg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
});

map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03238901390978, 38.913188059745586]
                    },
                    "properties": {
                        "title": "Mapbox DC",
                        "icon": "monument"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "Mapbox SF",
                        "icon": "harbor"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});
