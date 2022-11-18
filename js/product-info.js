//get the ID of the currentProduct
let productInfoID = localStorage.getItem("productInfoID");
//get containers id`s
let container = document.getElementById("productsInfoContainer");
let commentsContainer = document.getElementById("commentsContainer");
let imagesContainer = document.getElementById("imagesContainer");
let addCommentsContainer = document.getElementById("addCommentsContainer");
let relatedProductsContainer = document.getElementById("relatedProductsContainer");
let submitComment = document.getElementById("submitComment");

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
        showImages(data);
        console.log("")
        showRelatedProducts(data);

    })
    //get comments json from PRODUCT_INFO_COMMENTS_URL
    let productComment = PRODUCT_INFO_COMMENTS_URL + productInfoID + EXT_TYPE
    console.log(productComment); //
    fetch(productComment).then(function (response) {
        console.log("sadas")
        return response.json();
    }).then(function (item) {
        console.log("bbb")
        showComment(item);
    }
    )

    submitComment.addEventListener("click", function (e) {

        addComment();
    })
})
function showData(item) {

    container.innerHTML += `  
    <br/>              
    <div class="col-md-8">
       <h1 class="title mb-6">${item.name}</h1>
        <div class ="d-flex w-200 justify-content-between">
                <div class="col-md-6">
                    <h4>${item.description}</h4>
                    <h4 class="mb-0"> ${item.cost} ${item.currency}</h4>
                    <small class="text-muted">${item.soldCount} unidades vendidas </small>
                </div>    
         </div>        
    </div>`
}

function showImages(item) {

    imagesContainer.innerHTML +=
        `<div id="controlsCarousel" class="carousel slide" data-bs-ride="carousel">
        <div id="containerCarousel" class="carousel-inner">
            </div>
            </div>
            `
        ;
    const containerCarousel = document.getElementById('containerCarousel');
    for (images of item.images) {

        containerCarousel.innerHTML +=
            `<div class="carousel-item">
            <img class="d-block w-100" src="${images}" alt="First slide">
        </div>`;
    }
    const controlsCarousel = document.getElementById('controlsCarousel')

    controlsCarousel.innerHTML +=
        `
        <button class="carousel-control-prev" type="button" data-bs-target="#controlsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
      <button class="carousel-control-next" type="button" data-bs-target="#controlsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <br>
       
  `;
    const active = document.getElementsByClassName('carousel-item')
    active[0].classList.add('active')
}
function showRelatedProducts(item) {
   
    for (let data of item.relatedProducts) {
        relatedProductsContainer.innerHTML += `
        
               <div class="card mx-2" style="width: 18rem;" id="${data.id}" onclick="redirectTorelatedProduct(${data.id})">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text" "mb-0">${data.name}.</p>
        </div>
      </div>
      `;
             
    }
    
}
function redirectTorelatedProduct(id) {

  
        localStorage.setItem("productInfoID", id);
        location.reload();
    }


function showComment(item) {
    commentsContainer.innerHTML = `<br>
<h4 class="title mb-6">Comentarios</h4>`
    for (const data of item) {
        commentsContainer.innerHTML +=
            `<div class="col-md-8">            
        <div class ="d-flex w-100 justify-content-between">
                 
        <div class="stars"> 
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span> </div> 
                        </div>
                    <p class="mb-1"> ${data.description}</p>
                    <p class="mb-1"> ${data.dateTime}</p>
                    <small class="text-muted">${data.user} </small>
                    </div>                 
                    
        </div>`}

    const star = document.getElementsByClassName("stars")
    for (let i = 0; i < star.length; i++) {
        for (let f = 0; f < star[i].children.length; f++)
            if (f < item[i].score) {
                star[i].children[f].classList.add("checked")
            }
    }
}

function addComment() {
    let userComment = document.getElementById("userComment").value;
    let userScore = document.getElementById("userScore").value;

    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    let hours = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0');
    let seconds = String(today.getSeconds()).padStart(2, '0');
    let dateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    commentsContainer.innerHTML +=
    `<div class="col-md-8">            
    <div class ="d-flex w-100 justify-content-between">
         
            <div class="stars"> 
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span> </div> 
                </div>
            <p class="mb-1"> ${userComment}</p>
            <p class="mb-1"> ${dateTime}</p>
            <small class="text-muted">${userEmail} </small>
        </div>
    </div>`

    const star = document.getElementsByClassName("stars")
    for (let f = 0; f < star[star.length-1].children.length; f++){
        if (f < userScore) {
            star[star.length-1].children[f].classList.add("checked")
        }
    }
}