// -----------------------------------------------------------------------------------------------------------------------------------------
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var mapAll = L.map("map_all", {
  center: [45.52, -122.67],
  zoom: 13
});
  
// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
var tileAll = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

tileAll.addTo(mapAll);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(mapAll);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");
// -----------------------------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------------------------
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var mapAmerican = L.map("map_cuisine", {
  center: [45.52, -122.67],
  zoom: 13
});
  
// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
var tileAmerican = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

tileAmerican.addTo(mapAmerican);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(mapAmerican);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");
// -----------------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------------------------
var asianCuisine = [{
  restaurant: "Jollibee",
  rating: 5.0,
},
{
  restaurant: "Max's",
  rating: 3.0,
},
{
  restaurant: "Gerry's Grill",
  rating: 4.0,
},
{
  restaurant: "Bario Fiesta",
  rating: 3.5,
},
{
  restaurant: "Sosing's",
  rating: 5.0,
}
];

d3.select("tbody")
  .selectAll("tr")
  .data(asianCuisine)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.restaurant}</td><td>${d.rating}</td>`;
  });
// -----------------------------------------------------------------------------------------------------------------------------------------
