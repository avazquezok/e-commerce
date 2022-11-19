const CATEGORIES_URL = "http://localhost:3000/?emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/?emercado-api/sell/publish.json";
const PRODUCTS_URL = "http://localhost:3000/?emercado-api/cats_products/";
const PRODUCT_INFO_URL = "http://localhost:3000/?emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/?emercado-api/products_comments/";
const CART_INFO_URL = "http://localhost:3000/?emercado-api/user_cart/";
const CART_BUY_URL = "http://localhost:3000/?emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

//get userEmail from Index and put in into localStorage
let userEmail = localStorage.getItem("email");
let containerNav = document.getElementById("navbarNav");

//dropdown menu 
document.addEventListener("DOMContentLoaded", function () {
  containerNav.innerHTML += `<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
${userEmail}    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
      <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
      <li><a class="dropdown-item" href="index.html">Cerrar Sesion</a></li>
    </ul>
  </div>`

const dropdownMenu = document.getElementsByClassName("dropdown-item")  ;
dropdownMenu[2].setAttribute("id", "logout");
let logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", function (evt){
  localStorage.removeItem('email');
  location.href = "index.html"

})


})
let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}