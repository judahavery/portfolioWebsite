window.addEventListener("scroll", function() {scrolling()});

var prevScrollTop = 0;

function scrolling()
{
  //If the top of screen is greater than previous top value
  if (document.documentElement.scrollTop > prevScrollTop)
  {
    document.getElementById("navbar").style.top = "-85px";
  }
  //If the top of screen is less than or equal to top value
  else
  {
    document.getElementById("navbar").style.top = "0px";
  }

  //Finding the scroll top value for next check
  prevScrollTop = document.documentElement.scrollTop;
}
