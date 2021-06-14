var navbar = document.getElementById("navbar");

var navOpen = false;
var mobilePage = false;
var navIsFixed;

var prevScrollTop = 0;
var delayNav = 0;

document.addEventListener("DOMContentLoaded", function () {
  //Is this a mobile page?
  mobilePage = isMobilePage();

  //Wait to setup after we know if its mobile or not
  staticNav();
});

window.onresize = function (event) {
  scrolling();
};

document.addEventListener("scroll", function () {
  scrolling();
});

//Looking for when someone clicks outside of the nav overlay
document.addEventListener("click", (event) => {
  let targetElement = event.target; // clicked element

  do {
      if (targetElement == document.getElementById("nav-overlay")) {
          // This is a click inside
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  closeNav();
});

function isMobilePage() {
  var pathname = window.location.pathname;
  var pageName = pathname.split("/").pop();
  var mobPrefix = "mob_";

  //If this is a mobile page
  if (pageName.search(mobPrefix) != -1) {
    return true;
  }
}

function scrolling() {
  if (!navOpen) {
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
}

// Fixed Nav
function fixNav() {
  navIsFixed = true;

  if (!mobilePage) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.add("fixed-nav");
    document.getElementById("navbar").classList.remove("static-nav");
  }
  else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").classList.add("mob-fixed-nav");
    document.getElementById("navbar").classList.remove("mob-static-nav");
  }
}

// Static Nav
function staticNav() {
  navIsFixed = false;

  if (!mobilePage) {
    document.getElementById("navbar").classList.add("static-nav");
    document.getElementById("navbar").classList.remove("fixed-nav");
    document.getElementById("navbar").style.top = document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight + "px";
  }
  else {
    document.getElementById("navbar").classList.add("mob-static-nav");
    document.getElementById("navbar").classList.remove("mob-fixed-nav");
    document.getElementById("navbar").style.top = "0px";
  }
}

// Open
function openNav() {
  setTimeout(() => {
    document.getElementById("navbar").classList.add("hidden-navbar");
    document.getElementById("nav-overlay").style.margin = "0 0" + (window.innerWidth - document.getElementById("nav-overlay").offsetWidth) + "px 0";
    navOpen = true;
  }, delayNav);
}

// Close
function closeNav() {
  //If navIsFixed, then set it to the top of screen
  if (navIsFixed) {
    document.getElementById("navbar").style.margin = "0px";
  }

  document.getElementById("navbar").classList.remove("hidden-navbar");
  document.getElementById("nav-overlay").style.margin = "0 0 0 100%";
  navOpen = false;
}

// Close Delayed
function delayCloseNav() {
  setTimeout(() => {
    //If navIsFixed, then set it to the top of screen
    if (navIsFixed) {
      document.getElementById("navbar").style.margin = "0px";
    }

    document.getElementById("navbar").classList.remove("hidden-navbar");
    document.getElementById("nav-overlay").style.margin = "0 0 0 100%";
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
