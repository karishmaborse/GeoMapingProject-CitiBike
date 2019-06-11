// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function


// Create the tile layer that will be the background of our map
var bikeMap = L.map("map-id", {
  center: [40.7128, -74.0059],
  zoom: 12
})


  // Create a baseMaps object to hold the lightmap layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY}).addTo(bikeMap)

// Create an overlayMaps object to hold the bikeStations layer
//var bikestations = [];
var url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"



d3.json(url, function(response) {
  console.log(response);
  for (var i = 0; i < response.data.stations.length; i++) {
    var location = [response.data.stations[i].lat, response.data.stations[i].lon]
    console.log(location)

    L.marker(location).bindPopup("<h1>" + response.data.stations[i].name + "</h1> <hr> <h3> StationID: " + response.data.stations[i].station_id + "</h3> <h3> Capacity: " + response.data.stations[i].capacity + "<h4> Location: " + location + "</h4>").addTo(bikeMap);
  };
  
})









  // Create the map object with options


  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map

// Create the createMarkers function

  // Pull the "stations" property off of response.data

  // Initialize an array to hold bike markers

  // Loop through the stations array
    // For each station, create a marker and bind a popup with the station's name

    // Add the marker to the bikeMarkers array

  // Create a layer group made from the bike markers array, pass it into the createMap function


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete