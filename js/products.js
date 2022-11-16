//buttons of sorting functions
let sortAscButton = document.getElementById("sortPriceAsc");
let sortDescButton = document.getElementById("sortPriceDesc");
let sortByCountButton = document.getElementById("sortByCount");
let filterButton = document.getElementById("rangeFilterCount");
let cleanFilterButton = document.getElementById("cleanFilterButton");
let searchInput = document.getElementById("search");
let submitSearchButton = document.getElementById("submitSearch");


//get the ID of the currentCategoriesArray
let catID = localStorage.getItem("catID");

//get the ID of the currentProduct
let productID = localStorage.getItem("productID");

const container = document.getElementById("productsContainer");

//get products json from PRODUCTS_URL
document.addEventListener("DOMContentLoaded", function () {
    let urlCat = PRODUCTS_URL + catID + EXT_TYPE
    fetch(urlCat).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.products);
        showData(data.products);

        sortAscButton.addEventListener("click", function () {
            sortPriceAsc(data.products);
            container.innerHTML = "";
            showData(data.products);

        })
        sortDescButton.addEventListener("click", function () {
            sortPriceDesc(data.products);
            container.innerHTML = "";
            showData(data.products);

        })
        sortByCountButton.addEventListener("click", function () {
            sortByCount(data.products);
            container.innerHTML = "";
            showData(data.products);

        })
        filterButton.addEventListener("click", function () {
            priceFilter(data.products);

        });
    })
});
//show products
function showData(dataArray) {
    for (const item of dataArray) {
        container.innerHTML += `<div onclick="setProductInfoID(${item.id})" class="list-group-item-action cursor-active">
        <div class="row">
        <div class="col-3">
        <img src="${item.image}" alt="${"imagen"}" class="img-thumbnail" >
        </div>
        <div class="col">
        <h4>${item.name}</h4>
        <div class ="d-flex w-100 justify-content-between">
        <p class="mb-1">${item.description}</p>
        <p class="mb-1"> ${item.cost} ${item.currency}</p>
        <small class="text-muted">${item.soldCount} unidades vendidas </small>
        </div>
        </div>
    </div>
</div>`;
    }
}

showData()

//set product/id and redirect to products-info
function setProductInfoID(id) {
    localStorage.setItem("productInfoID", id);
    window.location = "product-info.html"
}
//sorting data functions
function sortPriceAsc(dataArray) {
    dataArray.sort((a, b) => {
        return b.cost - a.cost;
    });
}

function sortPriceDesc(dataArray) {
    dataArray.sort((a, b) => {
        return a.cost - b.cost;
    });
}

function sortByCount(dataArray) {
    dataArray.sort((a, b) => {
        return b.soldCount - a.soldCount;
    })
}


function priceFilter(dataArray) {

    let minFilter = document.getElementById("rangeFilterCountMin").value;
    let maxFilter = document.getElementById("rangeFilterCountMax").value;
    console.log(minFilter)
    dataArray.cost.filter((dataArray) => dataArray.cost >= minFilter && dataArray.cost <= maxFilter)
}



