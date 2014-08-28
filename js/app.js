var latitudes = [55.75228, 38.898537, 38.8507126, 38.84753];
var longitudes = [37.60357, -77.13208299999997, -77.09903600000001, -77.06577290000001];

function init_map(index) {
  var myLocation = new google.maps.LatLng(latitudes[index], longitudes[index]);
  var mapOptions = {
    center: myLocation,
    zoom: 16
  };
  var marker = new google.maps.Marker({
    position: myLocation,
    title: "Property Location"
  });
  var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);
  marker.setMap(map);
}

