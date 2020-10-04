const mymap = document.getElementById('mymap');
const mymap1 = document.getElementById('mymap1');
const mymap2 = document.getElementById('mymap2');

const mymap = L.map('mapid').setView([18.5771346940, -70.0466857410], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiYWxiZXJ0b2hmIiwiYSI6ImNrZnZvcXUxMzE0YXQydHFxMmF1bDZxYW0ifQ.gXwNXawPreK9wZ7WzLFIgA'
}).addTo(mymap);

const mymap1 = L.map('mapid1').setView([18.5771346940, -70.0466857410], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiYWxiZXJ0b2hmIiwiYSI6ImNrZnZvcXUxMzE0YXQydHFxMmF1bDZxYW0ifQ.gXwNXawPreK9wZ7WzLFIgA'
}).addTo(mymap1);


const mymap2 = L.map('mapid2').setView([18.5771346940, -70.0466857410], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiYWxiZXJ0b2hmIiwiYSI6ImNrZnZvcXUxMzE0YXQydHFxMmF1bDZxYW0ifQ.gXwNXawPreK9wZ7WzLFIgA'
}).addTo(mymap2);