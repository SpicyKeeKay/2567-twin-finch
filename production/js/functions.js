// JavaScript Document
jQuery(document).ready(function($){

function initialize() {
  var myLatlng = new google.maps.LatLng(47.6686553, -122.3624221);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

	// Smooth scroll home nav
		$('#smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-140
			 }, 500, function(){
		
			   // when done, add hash to url
			   // (default click behaviour)
			   window.location.hash = hash;
			 });
		
		});

	
});