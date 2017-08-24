jQuery(function($){


//------------------------------------------------------------------------
//						Define vars
//------------------------------------------------------------------------
  var win			= $(window),
      body			= $('body'),
      header		= $('#navbar'),
      bgholder		= $('.bg-holder');


//------------------------------------------------------------------------
//			Determine viewport width matching with media queries
//------------------------------------------------------------------------
  function viewport() {
    var e = window,
        a = 'inner';

        if (!('innerWidth' in window)) {
          a = 'client';
          e = document.documentElement || document.body;
        }
        return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
        };
  }


//------------------------------------------------------------------------
//					Toggle "mobile" class
//------------------------------------------------------------------------
  function mobileClass() {
    var vpWidth = viewport().width; // This should match media queries

    if ((vpWidth <= 768) && (!$('body').hasClass('mobile'))) {
      $('body').addClass('mobile');
    } else if ((vpWidth > 768) && ($('body').hasClass('mobile'))) {
      $('body').removeClass('mobile');
    }
  }

  mobileClass();
  win.resize(mobileClass);


//---------------------------------------------------------------------------
// Toggle classes in body for syncing sliding animation with other elements 
//---------------------------------------------------------------------------
  $('#navbar-collapse')
    .on('show.bs.collapse', function (e) {
	  $('body').addClass('menu-slider');
	})
	.on('hide.bs.collapse', function (e) {
	  $('body').removeClass('menu-slider');
	})


//------------------------------------------------------------------------
//		Append <img> with .bg-holder as CSS backgrounds
//------------------------------------------------------------------------
  bgholder.each(function() {
    var imgSrc = $(this).children('img').attr('src');
    var bColor = $(this).css('background-color');
    var bAttachment = $(this).css('background-attachment');
    if(imgSrc){$(this).css('background-image', 'url("' + imgSrc + '")');}
    $(this).css('background-position', '50% 50%');
    if(bColor){$(this).css('background-color', bColor);}
    if(bAttachment){$(this).css('background-attachment', bAttachment);}
    $(this).children('img').hide();
  });


//------------------------------------------------------------------------
//		scrollify
//------------------------------------------------------------------------
  $.scrollify({
	section:				".fs-height",
	sectionName:			false,
	setHeights:				false
  });


//------------------------------------------------------------------------
//		Add scroll button
//------------------------------------------------------------------------
  $('.scroll-btn').each(function() {
    $(this).append('<a href="#" class="scroll">Scroll for more</a>');
    $(this).find('.scroll').click(function(e) {
	  e.preventDefault();
	  $.scrollify.next();
	});
  });


//------------------------------------------------------------------------
//			Initialize Google Maps
//------------------------------------------------------------------------
  if ($('.map').length) { googleMap(); }

    function googleMap() {

        $('.map').each(function (i, e) {

            $map = $(e);
            $map_lat = $map.attr('data-mapLat');
            $map_lon = $map.attr('data-mapLon');
            $map_zoom = parseInt($map.attr('data-mapZoom'));
            $map_title = $map.attr('data-mapTitle');
            $map_info = $map.attr('data-info');
            $map_img = "sites/all/themes/geeklabel/images/marker.png";
            $map_height = $map.attr('data-height');

            var latlng = new google.maps.LatLng($map_lat, $map_lon);
            var options = {
                scrollwheel: false,
                draggable: !("ontouchend" in document),
                zoomControl: false,
                disableDoubleClickZoom: true,
                disableDefaultUI: true,
                zoom: $map_zoom,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            
            /* Map's style */
            var styles = [
						  {
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#f5f5f5"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#616161"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.stroke",
						    "stylers": [
						      {
						        "color": "#f5f5f5"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.land_parcel",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#bdbdbd"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#eeeeee"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#e5e5e5"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#ffffff"
						      }
						    ]
						  },
						  {
						    "featureType": "road.arterial",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#dadada"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#616161"
						      }
						    ]
						  },
						  {
						    "featureType": "road.local",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.line",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#e5e5e5"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#eeeeee"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#c9c9c9"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  }
						]

            
            var styledMap = new google.maps.StyledMapType(styles, {
                name: "Styled Map"
            });

            var map = new google.maps.Map($map[0], options);

            var icon = {
                url: $map_img,
                size: null,
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(27, 27),
                scaledSize: new google.maps.Size(54, 54)
            };

            var marker = new google.maps.Marker({
                position: latlng, // loc is a variable with my lngLat object
                title: $map_title,
                map: map,
                icon: icon
            });

            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var contentString = '<div class="infobox-inner">' + $map_info + '</div>';
            
			//Custom infowindow code;
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
            //infowindow.open(map,marker); // To force Infowindow open

            // user defined size
            $map.css({
              'height': $map_height + 'em'
            });
            
            // center map on resize
            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });

      });
    }


}); // end function