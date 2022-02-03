var mymap = L.map("map").setView([41.898824072287674, 12.495254115003412], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9yemV3c2tpMTgiLCJhIjoiY2t6N2hxOWxvMWFjbDJvbXpicDNjY3kyeSJ9.i5wRsQr3bq76LeyV-Tqjfg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([41.898824072287674, 12.495254115003412])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am Rome, Italy.")
    .openPopup();