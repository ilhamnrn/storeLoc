mapboxgl.accessToken = 'pk.eyJ1IjoiaWxoYW1udXJyb25pIiwiYSI6ImNrNm5uZGVwYzB3aWczb3M4cWxwOXk1NGkifQ.hk7Ogp_JVKaNFL3o17pCMg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    center: [107.55503, -6.9043]
});

//fetch stores from API
async function getStores() {
  const res = await fetch('/api/v1/stores');
  const data = await res.json();

  const stores = data.data.map(store => {
    return {
      type: 'Features',
      geometry: {
        type: 'Point',
        coordinates: [store.location.coordinates[0], store.location.coordinates[1]]
      },
      properties: {
        storeId: store.storeId,
        icon: 'shop'
      }
    }
  });

  loadMap(stores)
}


//load map with stores
function loadMap(stores) {
    map.on('load', function() {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: stores
          }
        },
        layout: {
          'icon-image': '{icon}-15',
          'icon-size': 1.5,
          'text-field': '{storeId}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.9],
          'text-anchor': 'top'
        }
      });
    });
  }

  getStores()