var mymap = L.map("map").setView([44.726958006033406, -89.55501342755406], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9yemV3c2tpMTgiLCJhIjoiY2t6N2hxOWxvMWFjbDJvbXpicDNjY3kyeSJ9.i5wRsQr3bq76LeyV-Tqjfg', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var montreal = L.marker([46.4243432836805, -90.22918483150495], {icon: myIcon1}).bindPopup("<b>Montreal").addTo(mymap);
var lambeau = L.marker([44.50153953510635, -88.0621761151555], {icon: myIcon2}).bindPopup("<b>Lambeau Field").addTo(mymap);
var saxon = L.marker([46.560553230597215, -90.43965886051775], {icon: myIcon3}).bindPopup("<b>Saxon Harbor Park").addTo(mymap);
var porcupine = L.marker([46.74334652357542, -89.8022833457103], {icon: myIcon4}).bindPopup("<b>Porcupine Mountains").addTo(mymap);
var greenlake = L.marker([43.8442115035398, -88.96012261748285], {icon: myIcon5}).bindPopup("<b>Green Lake").addTo(mymap);
var turtleflambeau = L.marker([46.0734619814143, -90.17073241170473], {icon: myIcon6}).bindPopup("<b>Turtle Flambeau Waters").addTo(mymap);
var brule = L.marker([46.53756773462119, -91.5927109796645], {icon: myIcon7}).bindPopup("<b>Brule River State Forest").addTo(mymap);
var bohemia = L.marker([46.11953672471013, -89.8577420574398], {icon: myIcon8}).bindPopup("<b>Little Bohemia Lodge").addTo(mymap);
var belts = L.marker([44.51586633214305, -89.5750984351199], {icon: myIcon9}).bindPopup("<b>Belt's Soft Serve Ice Cream").addTo(mymap);
var whitecap = L.marker([46.40700967552164, -90.39696039293291], {icon: myIcon10}).bindPopup("<b>Whitecap Mountains Resort").addTo(mymap);
var apostle = L.marker([46.811032037438764, -90.84720215827956], {icon: myIcon11}).bindPopup("<b>Apostle Highlands Golf Course").addTo(mymap);
var islands = L.marker([46.930186734121975, -90.63352521562436], {icon: myIcon12}).bindPopup("<b>Apostle Islands").addTo(mymap);