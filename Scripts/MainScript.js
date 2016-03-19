var items = ["Resources/egypt1.jpg", "Resources/greece1.jpg",
             "Resources/dubai1.jpg", "Resources/dubai2.jpg",
             "Resources/florence1.jpg", "Resources/thailand1.jpg",
             "Resources/thailand2.jpg", "Resources/venice1.jpg",];
var step = 0;
function slideImages() {
    document.getElementById("SlideShowImages").src = items[step];
    if (step < 7)
        step++;
    else step = 0;
    setTimeout("slideImages()",2500);
}
slideImages();
