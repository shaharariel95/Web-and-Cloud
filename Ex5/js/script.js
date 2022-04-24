// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $("#quote-carousel").carousel({
        pause: true,
        interval: 4000,
    });
});

var x ;
var y ;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}

function showPosition(position) {
  x = position.coords.latitude;
  y = position.coords.longitude;
}
function printLocation() {
    console.log(x , y);
}
