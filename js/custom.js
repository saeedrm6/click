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



/*main page Editor's suggestion carousel*/
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });

