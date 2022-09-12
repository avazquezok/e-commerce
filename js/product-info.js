//get the ID of the currentProduct
let productInfoID = localStorage.getItem("productInfoID");
let container = document.getElementById("productsInfoContainer");
let imagesContainer = document.getElementById("imagesContainer");
console.log(productInfoID);

//get products json from PRODUCTS_URL
document.addEventListener("DOMContentLoaded", function () {

    let urlProductInfo = PRODUCT_INFO_URL + productInfoID + EXT_TYPE
    console.log(urlProductInfo);
    fetch(urlProductInfo).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        showData(data);

    })
})
function showData(item) {

    container.innerHTML += `  
    <br/>              
        <div class="col-md-8">
                <h2>${item.name}</h2>
        <div class ="d-flex w-100 justify-content-between">
        <div class="col-md-6">
        <p class="mb-1">${item.description}</p>
        <p class="mb-1"> ${item.cost} ${item.currency}</p>
        <small class="text-muted">${item.soldCount} unidades vendidas </small>
        </div>
        
               
        </div>
        </div>    
</div>`;
    for (images of item.images) {
        container.innerHTML += `<div class="col-md-12">

      <img src="${images}"</div>`;
        console.log(container); //  );
    }
}
