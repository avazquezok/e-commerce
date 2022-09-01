const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.getElementById("container");

let userEmail = localStorage.getItem("email");
let containerNav = document.getElementById("navbarNav");

document.addEventListener("DOMContentLoaded", function () {
    containerNav.innerHTML += `<li class = "nav-link"><a>${userEmail}</a></li>`;

})

function showData(dataArray) {
    for (const item of dataArray) {
        container.innerHTML += `<div class="list-group-item-action cursor-active">
        <div class="row">
        <div class="col-3">
        <img src="${item.image}" alt="${"imagen"}" class="img-thumbnail" >
        </div>
        <div class="col">
        <div ckass ="d-flex w-100 justify-content-between">
        <h4>${item.name}</h4>
        <small class="text-muted">${item.soldCount} unidades vendidas </small>
        </div>
        <p class="mb-1">${item.description} ${item.cost} ${item.curerency}</p>
        </div>
    </div>
</div>`;
    }
}

fetch(DATA_URL).then(function (response) {
    return response.json();
}).then(function (data){
    showData(data.products);
});