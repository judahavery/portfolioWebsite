var navbar = document.getElementById("navbar");

var navOpen = false;
var mobilePage = false;
var navIsFixed;

var currentScrollPos = window.pageYOffset;
var prevScrollPos = window.pageYOffset;
var hideNavOnScrollDist = 600;
var delayNav = 200;

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
  if (mobilePage) {
    closeNav();
  }
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
    //Saving scroll positions for checkNavScroll()
    prevScrollPos = currentScrollPos;
    currentScrollPos = window.pageYOffset;

    //Below, checking if the page has passed the home section, and checking to hide nav on scroll

    //DESKTOP PAGES
    if (!mobilePage) {
      if (!navIsFixed) {
        if (window.scrollY >= document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight) {
          fixNav();
        }
      }
      //If the page is not past that number, then set back to normal
      else if (navIsFixed) {
        if (currentScrollPos > document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight + hideNavOnScrollDist){
          checkNavScroll(false);
        }

        if (window.scrollY < document.getElementById("home").offsetHeight - document.getElementById("navbar").offsetHeight) {
          staticNav();
        }
      }
    }
    //MOBILE PAGES
    else {
      if (!navIsFixed) {
        if (window.scrollY >= document.getElementById("home").offsetHeight - document.getElementById("mobile-nav").offsetHeight) {
          fixNav();
        }
      }
      //If the page is not past that number, then set back to normal
      else if (navIsFixed) {
        if (currentScrollPos > document.getElementById("home").offsetHeight - document.getElementById("mobile-nav").offsetHeight + hideNavOnScrollDist){
          checkNavScroll(true);
        }

        if (window.scrollY < document.getElementById("home").offsetHeight - document.getElementById("mobile-nav").offsetHeight) {
          staticNav();
        }
      }
    }
  }
}

function checkNavScroll(isNavMobile) {
  //HIDE NAV ON SCROLL DOWN WHEN NAV IS FIXED TO TOP OF SCREEN
  if (currentScrollPos > prevScrollPos) {
    if (!isNavMobile) {
      document.getElementById("navbar").style.margin = -1 * document.getElementById("navbar").offsetHeight + "px 0 0 0";
    }
    else {
      document.getElementById("mobile-nav").style.margin = -1 * document.getElementById("mobile-nav").offsetHeight + "px 0 0 0";
    }
  } else {
    if (!isNavMobile) {
      document.getElementById("navbar").style.margin = "0";
    }
    else {
      document.getElementById("mobile-nav").style.margin = "0";
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
    document.getElementById("mobile-nav").style.top = "0";
    document.getElementById("mobile-nav").classList.add("mob-fixed-nav");
    document.getElementById("mobile-nav").classList.remove("mob-static-nav");
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
    document.getElementById("mobile-nav").classList.add("mob-static-nav");
    document.getElementById("mobile-nav").classList.remove("mob-fixed-nav");
    document.getElementById("mobile-nav").style.top = "0px";
  }
}

// Open
function openNav() {
  setTimeout(() => {
    document.getElementById("mobile-nav").classList.add("hidden-navbar");
    document.getElementById("mobile-nav").classList.add("closed-navbar");
    document.getElementById("nav-overlay").style.margin = "0 0" + (window.innerWidth - document.getElementById("nav-overlay").offsetWidth) + "px 0";
    //document.getElementById("overlay-item").classList.add("nav-align-right");
    //document.getElementById("overlay-item").classList.remove("nav-align-left");
    navOpen = true;
  }, delayNav);
}

// Close
function closeNav() {
  //If navIsFixed, then set it to the top of screen
  if (navIsFixed) {
    document.getElementById("mobile-nav").style.margin = "0px";
  }

  document.getElementById("mobile-nav").classList.remove("hidden-navbar");
  document.getElementById("mobile-nav").classList.remove("closed-navbar");
  document.getElementById("nav-overlay").style.margin = "0 0 0 105%";
  //document.getElementById("overlay-item").classList.add("nav-align-left");
  //document.getElementById("overlay-item").classList.remove("nav-align-right");
  navOpen = false;
}

// Close Delayed
function delayCloseNav() {
  setTimeout(() => {
    //If navIsFixed, then set it to the top of screen
    if (navIsFixed) {
      document.getElementById("mobile-nav").style.margin = "0px";
    }

    document.getElementById("mobile-nav").classList.remove("hidden-navbar");
    document.getElementById("mobile-nav").classList.remove("closed-navbar");
    document.getElementById("nav-overlay").style.margin = "0 0 0 105%";
    //document.getElementById("overlay-item").classList.add("nav-align-left");
    //document.getElementById("overlay-item").classList.remove("nav-align-right");
    navOpen = false;
  }, delayNav);
}