let userEmail = localStorage.getItem("email");
let containerNav = document.getElementById("navbarNav");

document.addEventListener("DOMContentLoaded", function () {
    containerNav.innerHTML += `<li class = "nav-link"><a>${userEmail}</a></li>`;

})