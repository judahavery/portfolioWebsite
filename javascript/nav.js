var navbar = document.getElementById("navbar");

var navOpen = false;
var mobLanding = false;
var navIsFixed;

var prevScrollTop = 0;
var delayNav = 0;

document.addEventListener("DOMContentLoaded", function () {
  staticNav();
});

window.onresize = function (event) {
  scrolling();
};

document.addEventListener("scroll", function () {
  scrolling();
});

function scrolling() {
  //Check if the page has passed the home section
  if (!navIsFixed) {
    if (window.scrollY >= document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight) {
      fixNav();
    }
  }
  //If the page is not past that number, then set back to normal
  else if (navIsFixed) {
    if (window.scrollY < document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight) {
      staticNav();
    }
  }
}

// Fixed Nav
function fixNav() {
  navIsFixed = true;

  if (!mobLanding) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.add("fixed-nav");
    document.getElementById("navbar").classList.remove("static-nav");
  }
  else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.add("mob-fixed-nav");
    document.getElementById("navbar").classList.remove("mob-static-nav");
  }
}

// Static Nav
function staticNav() {
  navIsFixed = false;

  if (!mobLanding) {
    document.getElementById("navbar").classList.add("static-nav");
    document.getElementById("navbar").classList.remove("fixed-nav");
    document.getElementById("navbar").style.top = document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight + "px";
  }
  else {
    document.getElementById("navbar").classList.add("mob-static-nav");
    document.getElementById("navbar").classList.remove("mob-fixed-nav");
    document.getElementById("navbar").style.top = document.getElementById("mob-home").offsetHeight - document.getElementById("navbar").offsetHeight + "px";
  }
}

// Open
function openNav() {
  setTimeout(() => {
    document.getElementById("navOverlay").style.height = "100%";
    document.getElementById("navbar").style.top = "-50px";
    navOpen = true;
  }, delayNav);
}

// Close
function closeNav() {
  document.getElementById("navOverlay").style.height = "0%";
  document.getElementById("navbar").style.top = "0px";
  navOpen = false;
}

// Close Delayed
function delayCloseNav() {
  setTimeout(() => {
    document.getElementById("navOverlay").style.height = "0%";
    document.getElementById("navbar").style.top = "0px";
    navOpen = false;
  }, delayNav);
}

//CREDIT TO W3 SCHOOLS FOR THIS FUNCTION
//Smooth scrolling link code
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top + 500
      }, 1000, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
