window.addEventListener("scroll", function() {scrolling()});


var prevScrollTop = 0;

function scrolling()
{
    //If the top of screen is greater than previous top value
    if (document.documentElement.scrollTop > prevScrollTop)
    {
      document.getElementById("navbar").style.top = "-70px";
    }
    //If the top of screen is less than or equal to top value
    else
    {
      document.getElementById("navbar").style.top = "0px";
    }

    //Finding the scroll top value for next check
    prevScrollTop = document.documentElement.scrollTop;
}


//CREDIT TO W3 SCHOOLS FOR THIS FUNCTION
//Smooth scrolling link code
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//<a target="_blank" class="button" href="downloads/cobbleDesignDocuments.zip">Design Documents</a>
