const element = document.getElementById("side-parent");
const childElements = element.querySelectorAll("*");
var i = 0;
var f = true;

var colors = 
[
    "#6b6dff",
    "#585afe",
    "#5254ff",
    "#4245ff",
    "#383aff",
    "#2e30ff",
    "#1417ff",
    "#0002fa",
    "#0000FA"
]
function changeColor() {
    var thcolor = colors[i];
    childElements.forEach(child => {
        child.style.backgroundColor = thcolor;
    });
    if (f){
        i += 1
        if (i == colors.length){
            f = false
        }
    }
    else{
        i -= 1;
        if (i < 0){
            f = true
        }
    }
}

setInterval(changeColor, 120)