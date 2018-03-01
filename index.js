//Get Geolocation if click 'current location'

function watchSubmitCurrentLoc() {
  $('.js-current-loc').submit(event => {
    event.preventDefault();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    function success(pos) {
      localStorage.removeItem('lat');
      localStorage.removeItem('long');
      localStorage.removeItem('address');

      localStorage.setItem('lat', pos.coords.latitude);
      localStorage.setItem('long', pos.coords.longitude);
      window.location = 'results-page.html';
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      alert(`ERROR(${err.code}): ${err.message} Please allow this page access to your Location`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}

$(watchSubmitCurrentLoc);

//Get location from user and verify/send to local storage---------------------------
var placeSearch, autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}


function watchSubmitUserLoc() {
    $('.js-user-loc').submit(event => {
      event.preventDefault();
      const userLocation = $(event.currentTarget).find('.js-user-input').val();
      $(event.currentTarget).find('.js-user-input').val("");
      localStorage.removeItem('lat');
      localStorage.removeItem('long');
      localStorage.removeItem('address');
      localStorage.setItem('address', userLocation);

      window.location = 'results-page.html';
    });
}

$(watchSubmitUserLoc);
