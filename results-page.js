const YELP_URL = "https://api.yelp.com/v3/businesses/";

      var destinations = [
        // {
        // name: 'Brick + Mortar',
        // address: '2435 Main St, Santa Monica, CA 90405',
        // type: 'American',
        // happyHours: [{
        //   day: [1,2, 3, 4, 5],
        //   hhStart: 12,
        //   hhEnd: 18,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'brick-mortar-santa-monica',
        // hhMenuLink: 'http://www.brickandmortar-brg.com/happyhour',
        // },
        //
        // {
        // name: 'Enterprise Fish Co.',
        // address: '174 Kinney St, Santa Monica, CA 90405',
        // type: 'Seafood',
        // happyHours: [{
        //   day: [1,2, 3, 4, 5],
        //   hhStart: 16,
        //   hhEnd: 19,
        //   deals: 'Drinks & Food',
        // },
        // {
        //   day: [5, 6],
        //   hhStart: 21,
        //   hhEnd: 23,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'enterprise-fish-santa-monica',
        // hhMenuLink: 'https://www.enterprisefishcosantamonica.com/happy-hour',
        // },
        //
        // {
        // name: 'Hama Sushi',
        // address: '213 Windward Ave, Venice, CA 90291',
        // type: 'Sushi',
        // happyHours: [{
        //   day: [0, 1, 2, 3, 4, 5, 6],
        //   hhStart: 16,
        //   hhEnd: 19,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'hama-sushi-venice',
        // hhMenuLink: 'http://www.theveniceconcierge.com/wp-content/uploads/2015/02/Screen-Shot-2015-02-28-at-5.26.05-PM.png',
        // },
        //
        // {
        // name: 'Hayden',
        // address: '8820 Washington Blvd, Culver City, CA 90232',
        // type: 'Cafe/Wine Bar',
        // happyHours: [{
        //   day: [0, 1, 2, 3, 4, 5, 6],
        //   hhStart: 17,
        //   hhEnd: 19,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'hayden-culver-city',
        // hhMenuLink: 'https://www.hayden.la/',
        // },
        //
        // {
        // name: 'Little Ruby',
        // address: '109 Santa Monica Blvd, Santa Monica, CA 90401',
        // type: 'Australian',
        // happyHours: [{
        //   day: [1, 2, 3, 4, 5],
        //   hhStart: 16,
        //   hhEnd: 18.5,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'little-ruby-santa-monica-2',
        // hhMenuLink: 'https://patch.com/california/santamonica/new-happy-hour-launches-little-ruby-santa-monica',
        // },
        //
        // {
        // name: 'Lunetta All Day',
        // address: '2420 Pico Blvd, Santa Monica, CA 90405',
        // type: 'American',
        // happyHours: [{
        //   day: [1, 2, 3, 4, 5],
        //   hhStart: 16,
        //   hhEnd: 18,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'lunetta-all-day-santa-monica',
        // hhMenuLink: 'https://www.lunettasm.com/all-day#allday-menu',
        // },
        //
        //
        // {
        // name: 'Michaels',
        // address: '1147 3rd St, Santa Monica, CA 90403',
        // type: 'American',
        // happyHours: [{
        //   day: [1, 2, 3, 4, 5, 6],
        //   hhStart: 17,
        //   hhEnd: 22.5,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'michaels-santa-monica-2',
        // hhMenuLink: 'http://www.michaelssantamonica.com/',
        // },
        //
        // {
        // name: 'Sushi Roku',
        // address: '1401 Ocean Ave, Santa Monica, CA 90401',
        // type: 'Sushi',
        // happyHours: [{
        //   day: [1, 2, 3, 4, 5, 6],
        //   hhStart: 17,
        //   hhEnd: 18.5,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'sushi-roku-santa-monica',
        // hhMenuLink: 'http://www.innovativedining.com/download/SRSM_bar-menu-HH_11.20.17.pdf',
        // },
        //
        // {
        // name: 'Tallulas',
        // address: '118 Entrada Dr, Santa Monica, CA 90402',
        // type: 'Mexican',
        // happyHours: [{
        //   day: [1, 2, 3, 4, 5],
        //   hhStart: 16,
        //   hhEnd: 18,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'tallulas-santa-monica',
        // hhMenuLink: 'http://www.tallulasrestaurant.com/wp-content/uploads/2018/01/Happy-Hour-1.25.18.pdf',
        // },
        //
        // {
        // name: 'Canal Club',
        // address: '2025 Pacific Ave, Venice, CA 90291',
        // type: 'Sushi',
        // happyHours: [{
        //   day: [0, 1, 2, 3, 4, 5, 6],
        //   hhStart: 17,
        //   hhEnd: 19,
        //   deals: 'Drinks & Food',
        // }],
        // deals: '',
        // hhEnd: '',
        // distance: '',
        // driveTime: '',
        // phone: '',
        // rating: '',
        // image: '',
        // yelpId: 'canal-club-venice-2',
        // hhMenuLink: 'http://www.canalclubvenice.com/new-page/',
        // },

        {
        name: 'Venice Whaler',
        address: '10 Washington Blvd, Venice, CA 90292',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        },
        {
          day: [1, 2, 3, 4],
          hhStart: 22,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-venice-whaler-venice',
        hhMenuLink: 'https://www.venicewhaler.com/happy-hour',
        },

        {
        name: 'Sunny Spot',
        address: '822 Washington Blvd, Venice, CA 90292',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15.5,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        },
        {
          day: [5, 6],
          hhStart: 23,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'sunny-spot-venice-2',
        hhMenuLink: 'http://www.sunnyspotvenice.com/menus/',
        },
        {
        name: 'Wabi Sabi',
        address: '1635 Abbot Kinney Blvd, Venice, CA 90291',
        type: 'Sushi',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 17.5,
          hhEnd: 18.5,
          deals: 'Secret HH Menu not available online',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'wabi-sabi-sushi-and-solana-venice',
        hhMenuLink: '#',
        },
        {
        name: 'Baja Cantina',
        address: '311 Washington Blvd, Marina Del Rey, CA 90292',
        type: 'Mexican',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        },
        {
          day: [1, 2, 3, 4, 5],
          hhStart: 22,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'baja-cantina-marina-del-rey',
        hhMenuLink: 'http://www.bajacantina.com/weekly-food-specials/',
        },

        {
        name: 'Venice Beach Wines',
        address: '529 Rose Ave, Venice, CA 90291',
        type: 'Wine Bar',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'venice-beach-wines-venice',
        hhMenuLink: 'http://venicebeachwines.com/dinner-menu-1/',
        },

        {
        name: 'The Firehouse',
        address: '213 Rose Ave, Venice, CA 90291',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-firehouse-venice',
        hhMenuLink: 'https://www.firehouseoldsac.com/menus/happy-hour/',
        },

        {
        name: 'The Anchor',
        address: '235 Main St, Venice, CA 90291',
        type: 'Seafood',
        happyHours: [{
          day: [2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-anchor-venice',
        hhMenuLink: 'http://theanchorvenice.squarespace.com/happy-hour-menu-fall-2015/',
        },
        {
        name: 'Ashland Hill',
        address: '2807 Main St, Santa Monica, CA 90405',
        type: 'Beer Garden',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'ashland-hill-santa-monica-3',
        hhMenuLink: 'http://www.ashlandhill.com/',
        },
        {
        name:'The Misfit',
        address: '225 Santa Monica Blvd, Santa Monica, CA 90401',
        type: 'American',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 12,
          hhEnd: 19,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-misfit-restaurant-bar-santa-monica',
        hhMenuLink: 'http://www.themisfitbar.com/',
      },
      {
      name: 'The Arsenal',
      address: '12012 W Pico Blvd, Los Angeles, CA 90064',
      type: 'Lounge',
      happyHours: [{
        day: [0, 1, 2, 3, 4, 5, 6],
        hhStart: 17,
        hhEnd: 19,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'the-arsenal-los-angeles-2',
      hhMenuLink: 'http://arsenalbar.com/happy-hour/',
      },
      {
      name: 'Accomplice Bar',
      address: '3811 Grand View Blvd, Los Angeles, CA 90066',
      type: 'Cocktail Bar',
      happyHours: [{
        day: [1, 2, 3, 4, 5],
        hhStart: 17,
        hhEnd: 19,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'accomplice-bar-los-angeles',
      hhMenuLink: 'https://www.accomplicebar.com/happy-hour/',
      },
      {
      name: 'Lobster & Beer',
      address: '3456 Motor Ave, Los Angeles, CA 90034',
      type: 'Seafood',
      happyHours: [{
        day: [0, 1, 2, 3, 4, 5, 6],
        hhStart: 11.5,
        hhEnd: 19,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'lobster-and-beer-los-angeles',
      hhMenuLink: 'http://ilovelobsterandbeer.com',
      },
      {
      name: 'Blind Barber',
      address: '10797 Washington Blvd, Culver City, CA 90232',
      type: 'Secret Grilled Cheese Bar',
      happyHours: [{
        day: [0, 1, 2, 3, 4, 5, 6],
        hhStart: 18,
        hhEnd: 20,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'blind-barber-culver-city',
      hhMenuLink: 'https://cdn.shopify.com/s/files/1/1771/6311/files/BBLAFallWinter2018FINAL.pdf?13328617572472258576',
      },
      {
      name: 'The Brixton',
      address: '2827 Pico Blvd, Santa Monica, CA 90405',
      type: 'Gastropub',
      happyHours: [{
        day: [0, 1, 2, 3, 4, 5, 6],
        hhStart: 15.5,
        hhEnd: 19.5,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'the-brixton-santa-monica',
      hhMenuLink: 'https://www.thebrixtonsm.com/events/',
      },
      {
      name: 'Sara The Wine Bar',
      address: '3936 Sepulveda Blvd, Culver City, CA 90230',
      type: 'Wine Bar',
      happyHours: [{
        day: [1, 2, 3, 4, 5],
        hhStart: 17,
        hhEnd: 19,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'sara-the-wine-bar-culver-city-2',
      hhMenuLink: 'https://www.sarathewinebar.com/events',
      },
      {
      name: 'Backstage Bar & Grill',
      address: '10400 Culver Blvd, Culver City, CA 90232',
      type: 'Karaoke Bar',
      happyHours: [{
        day: [0, 1, 2, 3, 4, 5, 6],
        hhStart: 16,
        hhEnd: 20,
        deals: 'Drinks & Food',
      }],
      deals: '',
      hhEnd: '',
      distance: '',
      driveTime: '',
      phone: '',
      rating: '',
      image: '',
      yelpId: 'backstage-bar-and-grill-culver-city',
      hhMenuLink: 'http://www.backstageculvercity.com/pdf/MenuDrink20151018.pdf',
      }];

      function initMap() {
        var bounds = new google.maps.LatLngBounds;
        var markersArray = [];

        var origin = getOrigin();

        var locations = [];
        for (let i = 0; i < destinations.length; i++) {
          locations.push(destinations[i].address);
        }

        var destinationIcon = 'http://icons.iconarchive.com/icons/iconshock/real-vista-food/32/beer-icon.png';
        var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=O|FFFF00|000000';
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.0448583, lng: -118.4484367},
          zoom: 10
        });
        var geocoder = new google.maps.Geocoder;

        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: [origin],
          destinations: locations,
          travelMode: 'DRIVING',
          drivingOptions: {
            departureTime: new Date(Date.now() + 2000),
            trafficModel: 'bestguess',
          },
          unitSystem: google.maps.UnitSystem.IMPERIAL,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          }

					else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;


            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            deleteMarkers(markersArray);

            var showGeocodedAddressOnMap = function(asDestination, name) {
              var icon = asDestination ? destinationIcon : originIcon;
              return function(results, status) {
                //console.log(status);
                if (status === 'OK') {
                  map.fitBounds(bounds.extend(results[0].geometry.location));
                  markersArray.push(new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: icon,
                    title: name
                  }));
                }
                else {
                  alert('Geocode was not successful due to: ' + status);
                }

              };
            };

            var results = response.rows[0].elements;
            //Add Origin/userLocation to the map
            geocoder.geocode({'address': originList[0]},
              showGeocodedAddressOnMap(false));
              outputDiv.innerHTML += 'Your Location: '+originList[0] + '<br>';
          }

         for (var j = 0; j < results.length; j++) {
            destinations[j].distance = results[j].distance.text;
            destinations[j].driveTime = results[j].duration_in_traffic.text;
          };

          for (let i = 0; i < destinations.length; i++) {
            destinations[i].distance = destinations[i].distance.replace(" mi", "");
          }

            let d = new Date();

            let day = d.getDay();
            //let day = 4;
            let hour = d.getHours();
            let minutes = d.getMinutes()/60;

            let currentTime = hour + minutes;
            //let currentTime = 18;

            let openNowResults = [];

            destinations.forEach(function(destination) {
              destination.happyHours.forEach(function(happyHour) {
                happyHour.day.forEach(function(d) {
                  if(day === d) {
                    if(happyHour.hhStart < currentTime && currentTime < happyHour.hhEnd) {
                      destination.deals = happyHour.deals;
                      destination.hhEnd = convertTime(`${happyHour.hhEnd}`);
                      openNowResults.push(destination);
                    }
                  };
                })
              })
            });

            openNowResults.sort(function(a,b) {
              if(a.distance < b.distance) {
                return -1;
              };
              if(a.distance > b.distance) {
                return 1
              };
              return 0;
              });
            //limit results to 10 results
            let finalResults = [];
            for(let i=0; i < 10 && i < openNowResults.length; i++) {
              finalResults.push(openNowResults[i]);
            }

            //Show openNowResults on map
            for (var j = 0; j < finalResults.length; j++) {
               geocoder.geocode({'address': finalResults[j].address},
               showGeocodedAddressOnMap(true, finalResults[j].name));
            };

            //change window to no results page
            if(openNowResults.length === 0) {
              window.location = 'no-results.html';
            }

            //Sends closest 10 or less bars to get attributes and then sent to display from this function
            getYelpAtts(openNowResults);
        });
      }

      function getYelpAtts(openNowResults) {

        Promise.all(openNowResults.map(function(result) {

          const URL = YELP_URL+result.yelpId;
          //CORS hack `https://cors-anywhere.herokuapp.com/${URL}`
          const settings = {
            url: `https://cors-anywhere.herokuapp.com/${URL}`,
            headers: {
              authorization: 'Bearer IubXj0FpEeTn8_hgYoR2TJsFvrfFC_bj3wsetjKzdRsVQtfTH6Fx8koPxn1MOWP7qhcTwuwtqeg2NqIAaE12YvRSFi8KUM5icnb7rBQpN_Snsonrlo_Cu7nIz9t4WnYx',
            },

            success: function(response){},
          }

          return $.ajax(settings).promise();
          })).then(function (results) {

          for(let i=0; i<openNowResults.length; i++) {
            openNowResults[i].phone = results[i].display_phone;
            openNowResults[i].rating = results[i].rating;
            openNowResults[i].image = results[i].image_url;
          }
          openNowResults.sort(function(a,b) {
            if(a.distance < b.distance) {
              return -1;
            };
            if(a.distance > b.distance) {
              return 1
            };
            return 0;
            });
          let finalResults = [];
          for(let i=0; i < 10 && i < openNowResults.length; i++) {
            finalResults.push(openNowResults[i]);
          }
          renderResults(finalResults);
          return Promise.all(finalResults);


        });
      }


      function getOrigin() {
        var lat = localStorage.getItem('lat');
        var long = localStorage.getItem('long');
        var userAddress = localStorage.getItem('address');

        if(lat === null) {
          var origin = userAddress;
        }
        else {
          var origin = lat +','+ long;
        }
        return origin;
      }



      var resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      function renderResults(results) {
          results.forEach(function(result) {
          resultsDiv.innerHTML += '<div class="container">Name: '+ result.name + '  ||  ' + result.address +
            '<br> Type: ' + result.type + ' ||  Phone: ' + result.phone + '<br> Rating: '
            + result.rating + '/5  ||  Deals: <a href="' +result.hhMenuLink+'" target="_blank">' + result.deals + '</a><br>' + result.distance +
            ' mi || <a href="'+displayDirections(result.address)+'" target="_blank">'+result.driveTime+ '</a><br>Happy Hour ends at '
            + result.hhEnd+ '<br></div>';
          });
      }

      function displayDirections(end){
        let URL = "https://www.google.com/maps/dir/";
        let origin = getOrigin();
        for(let i=0; i<origin.length; i++) {
          origin = origin.replace(" ","+");
          origin = origin.replace('"',"");
        }
        for(let i=0; i<end.length; i++) {
          end = end.replace(" ","+");
          end = end.replace('"',"");
        }
        URL = URL+origin+"/"+end;
        return URL;
      }

      function convertTime(time) {
        time = time.split('.'); // convert to array

        var hours = Number(time[0]);
        var minutes = (Number(time[1])*6);
        var timeValue;

        if (hours > 0 && hours <= 12)
        {
          timeValue= "" + hours;
        } else if (hours > 12)
        {
          timeValue= "" + (hours - 12);
        }
        else if (hours == 0)
        {
          timeValue= "12";
        }

        if(isNaN(minutes)){
          timeValue += ":00";
        } else {
          timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        }
        if(hours === 24) {
          timeValue += " AM";
        } else {
        timeValue += (hours >= 12 ) ? " PM" : " AM";  // get AM/PM
        }
        return timeValue;
      }


      function deleteMarkers(markersArray) {
        for (var i = 0; i < markersArray.length; i++) {
          markersArray[i].setMap(null);
        }
        markersArray = [];
      }

      //function to restart search
      //clear local storage
      function watchSubmit() {
        $("a").click(event => {
          event.preventDefault();
          localStorage.removeItem('lat');
          localStorage.removeItem('long');
          localStorage.removeItem('address');
          window.location = 'index.html';
        });
      }

      $(watchSubmit);

      $body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }
});
