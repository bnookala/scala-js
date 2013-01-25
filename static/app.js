$(window).load(function () {
    var map = new SJSMap();
    map.addAllMarkers();
});

var SJSMap = function () {
    this.map = L.map('map').setView([37.8004, -122.345], 13);
    this.apiKey = "f39f2318cf924151bab139be0e677f8e";
    var tileURL = ['http://{s}.tile.cloudmade.com/', this.apiKey, '/997/256/{z}/{x}/{y}.png'].join('');
    L.tileLayer(tileURL, {maxZoom: 18}).addTo(this.map);
};

SJSMap.prototype.data = [];

SJSMap.prototype.addAllMarkers = function () {
    $.get('/static/openpaths.json', $.proxy(this.onAllMarkersReceived, this));
};

SJSMap.prototype.onAllMarkersReceived = function (data) {
    var context = this;
    $.each(data, function (idx, elem) {
        context.addMarker(elem['lat'], elem['lon']);
    });
};

SJSMap.prototype.addMarker = function (lat, lon) {
    var marker = L.marker([lat, lon]).addTo(this.map);
};
