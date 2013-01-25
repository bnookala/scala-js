$(window).load(function () {
    var map = L.map('map').setView([51.505, -0.09], 13);
    var apiKey = "f39f2318cf924151bab139be0e677f8e";
    var tileURL = ['http://{s}.tile.cloudmade.com/', apiKey, '/997/256/{z}/{x}/{y}.png'].join('');
    L.tileLayer(tileURL, {maxZoom: 18}).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    var circle = L.circle([51.508, -0.11], 500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
    }).addTo(map);
    var polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
    ]).addTo(map);
});
