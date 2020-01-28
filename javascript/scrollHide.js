window.onscroll = function() {scrollFunction()};

const home = document.querySelector('.home');
const homeSize = home.style.height;

function scrollFunction() {
  if (document.body.scrollTop > homeSize || document.documentElement.scrollTop > homeSize) {
    document.getElementById("navbar").style.top = "0px";
  } else if(document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    document.getElementById("navbar").style.top = "-85px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
