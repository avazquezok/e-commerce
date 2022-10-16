let cartContainer = document.getElementById("cartContainer");
let containerCartFotm = document.getElementById("cartForm");
let cartId = 25801;

document.addEventListener("DOMContentLoaded", function () {
  let urlCart = CART_INFO_URL + cartId + EXT_TYPE;
  console.log(urlCart);
  fetch(urlCart).then(function (response) {
    return response.json();
  }).then(function (item) {
    showCartArticle(item);
  })
})

function showCartArticle(item) {
  for (let data of item.articles) {
    //Armar Tabla
    cartContainer.innerHTML += `
      <div class="container table text-center">
  <div class="row">
  <div class="col border border-secondary p-2 mb-2 border-opacity-25">
      
  </div>
  <div class="col border border-secondary p-2 mb-2 border-opacity-25 ">
      Nombre
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    Costo
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    Cantidad
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    Subtotal
    </div>
    </div>
    <div class="row">
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    <img class="img-thumbnail" style="width: 100px;"src="${data.image}">
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    ${data.name}
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    ${data.unitCost}${data.currency}
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    <input oninput ="calculateSubTotal(${data.unitCost}, this.value)" type="number" class="form-control" id="input" value="${data.count}" min = "0" >    
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    <span id="cartSubTotal">${data.currency}</span>
    </div>  
    </div>
    </div>`
  }
 
}
function calculateSubTotal(cost, count) {
  let cartSubTotal = document.getElementById("cartSubTotal");
  cartSubTotal.innerHTML = cost * count;

}