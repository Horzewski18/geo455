 var mymap = L.map('map').setView([35, -95], 5);
        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')
        .addTo(mymap);
var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 2
 }).addTo(mymap);

        data = data.map(item => { return {...item, value: parseInt(Math.random()*20)}});

        var migrationLayer = new L.migrationLayer({
            map: mymap,
            data: data,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
        migrationLayer.addTo(mymap);

        function setData(){
            migrationLayer.setData(data2);
        }
        function hide(){
            migrationLayer.hide();
        }
        function show(){
            migrationLayer.show();
        }
        function play(){
            migrationLayer.play();
        }
        function pause(){
            migrationLayer.pause();
        }
        function destroy() {
            migrationLayer.destroy();
        }