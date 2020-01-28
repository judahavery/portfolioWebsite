window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.getElementById("navbar").style.top = "0px";
  } else if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "-85px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
