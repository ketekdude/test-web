var positionGlobal = {};
function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
     

  } else { 
     alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  positionGlobal.lat = position.coords.latitude;
  positionGlobal.long = position.coords.longitude;
}