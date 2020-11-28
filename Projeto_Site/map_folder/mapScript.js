
var initialCoordinates = [-20.35, -40.29]; // Uvv
var mymap = L.map('mapid').setView(initialCoordinates, 13);

//adição do mapa
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW56b2RhbHZpIiwiYSI6ImNqb2U1cDZxZTE1N2Mzb3F1eDBsc240b28ifQ.Gf0YLjlXqSS6O6XWmnABgw'
}).addTo(mymap);

navigator.geolocation.getCurrentPosition(f1);

function f1(pos){	
    var lat = pos.coords.latitude;
    var log = pos.coords.longitude;
    mymap.setView([lat,log],17)
    var marker = L.marker([lat, log]).addTo(mymap);
    p1 = lat;
    p2 = log;
    marker.bindPopup("Seu Pedido Será Entregue Aqui!").openPopup();
}

var x = document.getElementById(`P`);
var pao=document.getElementById(`pao`);
pao.textContent=`${x}`;

