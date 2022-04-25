// When the DOM is ready, run this function
$(document).ready(function () {
    //Set the carousel options
    $("#quote-carousel").carousel({
        pause: true,
        interval: 4000,
    });
});

let latitude;
let longitude;


function initMap(lat,lng) {
    let elMap = document.querySelector('#map')
    
    let options = {
        center: { lat:lat , lng:lng },
        zoom: 14,
    }

    let map = new google.maps.Map(elMap, options)
    return new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "My location", 
      })

}

function getPosition() {
    if (!navigator.geolocation) {
      alert('HTML5 Geolocation is not supported in your browser.')
      return
    }
  
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
  }
  
  function mapReady() {
    console.log('Map is ready')
  }
  
  function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude)
  }
  
  function handleLocationError(error) {
    let locationError = document.getElementById('locationError')
  
    switch (error.code) {
      case 0:
        locationError.innerHTML =
          'There was an error while retrieving your location: ' + error.message
        break
      case 1:
        locationError.innerHTML =
          "The user didn't allow this page to retrieve a location."
        break
      case 2:
        locationError.innerHTML =
          'The browser was unable to determine your location: ' + error.message
        break
      case 3:
        locationError.innerHTML =
          'The browser timed out before retrieving the location.'
        break
    }
  }

function showOb() {
    let x = document.getElementById("thankUser");
    if (x.style.display === "flex") {
        // x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}



document.getElementById("edit-btn").onclick = function () {
    alert("click on a row to edit");
};

$(document).ready(function () {
    $(".cleaned-icon").click(function () {
        // Change src attribute of image
        if ($(this).attr("src") == "images/cleaned.png") {
            $(this).attr("src", "images/not-cleaned.png");
        } else $(this).attr("src", "images/cleaned.png");
    });
});




