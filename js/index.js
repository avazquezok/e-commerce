document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

let userEmail = localStorage.getItem("email");
let containerNav = document.getElementById("navbarNav");

document.addEventListener("DOMContentLoaded", function () {
    containerNav.innerHTML += `<li class = "nav-link"><a>${userEmail}</a></li>`;

})