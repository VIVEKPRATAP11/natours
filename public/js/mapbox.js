export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoidml2ZWs3MzU1IiwiYSI6ImNsY3JnbjNiMDAwbHozcHA0dnRxdXpoZDcifQ.40i9QzsizY4LK3VqD3so4Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vivek7355/clcrie6ut00w414s1he5v5aq3',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
