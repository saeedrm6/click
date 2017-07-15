/*Menu Mobile*/
function myFunction() {
  var x = document.getElementById("MobileNavbar");
  if (x.className === "topnav") {
      x.className += " responsible";
  } else {
      x.className = "topnav";
  }
}


/* Mega Menu */
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
});


$(document).ready(function() {
                    var owl = $('.owl-carousel');
                    owl.owlCarousel({
                        autoplay:true,
                        autoplayTimeout:1500,
                        autoplayHoverPause:true,
                        rtl: true,
                        margin: 10,
                        nav: true,
                        loop: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 4
                            }
                        }
                    })
                })

$(document).ready(function(){
  $( ".owl-prev").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $( ".owl-next").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
})

$(document).ready(function(){
    $(".irancel").mouseover(function(){
        $(".video-pattern").css("background-image", "none");
    });
});