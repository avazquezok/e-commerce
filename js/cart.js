let cartContainer = document.getElementById("cartContainer");
let containerCartFotm = document.getElementById("cartForm");
let cartId = 25801;

//Fetch
document.addEventListener("DOMContentLoaded", function () {
  let urlCart = CART_INFO_URL + cartId + EXT_TYPE;
  console.log(urlCart);
  fetch(urlCart).then(function (response) {
    return response.json();
  }).then(function (item) {
    showCartArticle(item);
  })
})

//Mostrar cart y mostrar calcular
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
    <input oninput ="calculate(${data.unitCost}, this.value)" type="number" class="form-control" id="input" value="${data.count}" min = "0" >    
    </div>
    <div class="col border border-secondary p-2 mb-2 border-opacity-25">
    <span id="cartSubTotal">${data.currency}</span>
    </div>  
    </div>
    </div>`

    costos.innerHTML += `
    <ul class="list-group">
   <li class="list-group-item d-flex justify-content-between align-items-center">
     Subtotal del producto ${data.currency}
    </div>
    </div>
    <span class="badge bg-primary rounded-pill" id="costosSubtotal" oninput ="calculate(${data.unitCost}, this.value)">${data.unitCost}</span>
   </li>
   <li class="list-group-item d-flex justify-content-between align-items-center">
     Costo del envio ${data.currency}
     <span class="badge bg-primary rounded-pill" id="cartCostoEnvioContainer"></span>
   </li>
   <li class="list-group-item d-flex justify-content-between align-items-center">
     Total
     <span class="badge bg-primary rounded-pill" id="total"></span>
   </li>
 </ul>
 <br>`
  }
}
//calcular costos
function calculate(cost, count) {
  let cartSubTotal = document.getElementById("cartSubTotal");
  cartSubTotal.innerHTML = cost * count;
  let costosSubtotal = document.getElementById("costosSubtotal");
  costosSubtotal.innerHTML = cost * count;
  let deliveryType = document.querySelector("input[name='deliveryType']:checked").value;
  let cartCostoEnvioContainer = document.getElementById("cartCostoEnvioContainer");
  cartCostoEnvioContainer.innerHTML = (cost * count) * deliveryType;
  let total = document.getElementById("total");
  total.innerHTML = Number(cartCostoEnvioContainer.innerHTML) + Number(costosSubtotal.innerHTML);

}
//Validar
let tarjetaCredito = document.getElementById("tarjetaCredito");
let transferenciaBancaria = document.getElementById("transferenciaBancaria");
let numeroCuenta = document.getElementById("numeroCuenta");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let codigoSeguridad = document.getElementById("codigoSeguridad");
let vencimientoTarjeta = document.getElementById("vencimientoTarjeta");
let botonMetodoPago = document.getElementById("metodoPago");
let botonComprar = document.getElementById("botonComprar");


function chequearOpcionPago() {
  if (tarjetaCredito.checked) {
    
    numeroTarjeta.disabled = false;
    codigoSeguridad.disabled = false;
    vencimientoTarjeta.disabled = false;
    numeroCuenta.disabled = true;
    numeroCuenta.required = false;
    numeroTarjeta.required = true;
    codigoSeguridad.required = true;
    vencimientoTarjeta.required = true;

  } else if (transferenciaBancaria.checked) {
    
    numeroCuenta.disabled = false;
    numeroTarjeta.disabled = true;
    codigoSeguridad.disabled = true;
    vencimientoTarjeta.disabled = true;
    numeroCuenta.required = true;
    numeroTarjeta.required = false;
    codigoSeguridad.required = false;
    vencimientoTarjeta.required = false;
    
  }
}
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

("use strict");
const forms = document.querySelectorAll(".needs-validation");
console.log(forms);
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if(!transferenciaBancaria.checked  && !tarjetaCredito.checked) {
      botonMetodoPago.classList.add("is-invalid")
      botonMetodoPago.classList.add("text-danger")
    } else {
    botonMetodoPago.classList.remove("is-invalid");
  botonMetodoPago.classList.remove("text-danger");


    }
      if (form.checkValidity()) {
    return showAlertSuccess();
  }
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
},
  false
);
});
