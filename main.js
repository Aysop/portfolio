// Set button to click.
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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
