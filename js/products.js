const container = document.getElementById("container");


let catID = localStorage.getItem("catID");
document.addEventListener("DOMContentLoaded", function () {
    let urlCat = PRODUCTS_URL + catID + ".json"
    fetch(urlCat).then(function (response) {
        return response.json();
    }).then(function (data) {
        showData(data.products);
    });

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
    }})
