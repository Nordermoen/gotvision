(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });


    //video -popup
    $(document).ready(function() {
    
        // Gets the video src from the data-src on each button
        var $videoSrc;  
        $('.video-btn').click(function() {
            $videoSrc = $(this).data( "src" );
        });
        console.log($videoSrc);
                    
        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {
            
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
        })
          
          
        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src',$videoSrc); 
        }) 
        
    // document ready  
    });


  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);







		
		
		
		
		
		
		