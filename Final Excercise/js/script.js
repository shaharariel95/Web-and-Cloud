var header = document.querySelector(".color-bar");
var sticky = header.offsetTop - 90;
var latitude;
var longitude;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function ShowDiv() {
    let mainObj = document.getElementById("main-obj-map");
    mainObj.style.visibility = "visible";
}

// position and map ---

function initMap(lat, lng) {
    let elMap = document.querySelector("#map");
    console.log("17");

    let options = {
        center: { lat: lat, lng: lng },
        zoom: 14,
    };
    let map = new google.maps.Map(elMap, options);
    return new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "My location",
    });
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    let mapSect = document.getElementsByClassName("map-sect");
    $("#rpt #map-sect").css("display", "block");
    $("#rpt #map-sect").css("position", "relative");
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}

function mapReady() {
    console.log("Map is ready");
}

function showLocation(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    document.getElementById("longitude").value = longitude;
    document.getElementById("latitude").value = latitude;

    console.log(longitude, latitude);
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    let locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML =
                "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML =
                "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML =
                "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML =
                "The browser timed out before retrieving the location.";
            break;
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

function printLocation() {}

// end position and map
$(document).ready(() => {
    //Desktop:
    // TAKING THE GREEN LINE FUNCTION
    window.onscroll = function() {
        myFunction();
    };

    // SCROLLING FUNCTION
    $(window).scroll(function(event) {
        let scroll = $(this).scrollTop();
        let opacity = scroll / 400;
        let rgba = "rgba(19, 127, 127," + opacity + ")";
        if (opacity >= 0) {
            $(".navbar").css("background-color", rgba);
        }
    });
});

function sortTable(n) {
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    table = document.getElementById("srt-tbl");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
            no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
                      first, which contains table headers): */
        for (i = 1; i < rows.length - 1; i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
                                one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
                                based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
                                and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
                                set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// function showData(data) {
//     document.querySelector("h5").innerHTML = `${data.category}`;
//     const ulFrag = document.createDocumentFragment();

//     for (const key in data.recommends) {
//         const li = document.createElement("li");
//         ulFrag.appendChild(li);
//     }

//     document.getElementById("report-sect").appendChild(ulFrag);
// }

// fetch("data/carousel.json")
//     .then((response) => response.json())
//     .then((data) => showData(data));