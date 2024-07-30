function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: 0, lng: 0 } 
    });

    let bounds = new google.maps.LatLngBounds();


    const locations = window.locations;

    locations.forEach(location => {
      const coords = location.geocodes.main;
      const position = { lat: coords.latitude, lng: coords.longitude };
      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: location.name
      });

      bounds.extend(position);
    });

    map.fitBounds(bounds);
  }
