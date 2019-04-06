// Set button to click. Source: https://codepen.io/samikeijonen/pen/jqvxdL
var button = document.getElementById("menu-toggle");

// Click the button.
button.onclick = function () {
    use strict
    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== button.className.indexOf("opened")) {
        button.className = button.className.replace(" opened", "");
        button.setAttribute("aria-expanded", "false");
    } else {
        button.className += " opened";
        button.setAttribute("aria-expanded", "true");
    }
}
