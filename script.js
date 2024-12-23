function highlight() {
    //Write your code here
    var boldItems = document.getElementsByTagName("strong");
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "green";
    }
}
function return_normal() {
    //Write your code here

    var boldItems = document.getElementsByTagName("strong");
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "black";
    }
}
