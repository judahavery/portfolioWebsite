window.addEventListener('load', function() {LoadAdaptivePages()});

function LoadAdaptivePages()
{
    if (screen.width <= 1200) {
        if (document.location == "file:///D:/Portfolio/portfolioWebsite/index.html")
        {
            document.location = "indexMob.html";
        }
        else if (document.location == "cobble.html")
        {

        }
        else if (document.location == "neo.html")
        {

        }
    }
}
