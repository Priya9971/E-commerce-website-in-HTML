// Script for navigation bar

const bars = document.getElementById("bar");
const navs = document.getElementById("navbar");
const closes = document.getElementById("close");


if (bars) {
    bars.addEventListener("click", function() {
        navs.classList.toggle("active");
    });
}

if (closes) {
    closes.addEventListener("click", function() {
        navs.classList.remove("active");
    });
}

