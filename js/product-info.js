//get the ID of the currentProduct
let productInfoID = localStorage.getItem("productInfoID");
//get containers id`s
let container = document.getElementById("productsInfoContainer");
let commentsContainer = document.getElementById("commentsContainer");
let imagesContainer = document.getElementById("imagesContainer");
let addCommentsContainer = document.getElementById("addCommentsContainer");
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

    })
    //get comments json from PRODUCT_INFO_COMMENTS_URL
    let productComment = PRODUCT_INFO_COMMENTS_URL + productInfoID + EXT_TYPE
    console.log(productComment); //
    fetch(productComment).then(function (response) {
        console.log("sadas")
        return response.json();
        console.log("dsadsad"); //
    }).then(function (item) {
        console.log("bbb")
        showComment(item);
        submitComment.addEventListener("click", function(e) {
            preventDefault(e);
            addComment();
    })
}
)

function showData(item) {

    container.innerHTML += `  
    <br/>              
    <div class="col-md-8">
       <h1 class="title mb-6">${item.name}</h1>
        <div class ="d-flex w-100 justify-content-between">
                <div class="col-md-6">
                    <p class="mb-0">${item.description}</p>
                    <p class="mb-0"> ${item.cost} ${item.currency}</p>
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
       
  `;
    const active = document.getElementsByClassName('carousel-item')
    active[0].classList.add('active')
}

function showComment(item) {

    for (const data of item) {
        commentsContainer.innerHTML +=
            `<br/>
        <div class="col-md-8">            
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
function addComment(){  
    console.log("submit comment");
    let userComment = document.getElementById("userComment");
    let userScore = document.getElementById("userScore");
    let dateTime = new Date(year, month, day, hours, minutes, seconds);
   
    commentsContainer.innerHTML +=
    console.log("antesdelInner")` <div class="col-md-8">            
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
for (let i = 0; i < star.length; i++) {
for (let f = 0; f < star[i].children.length; f++)
    if (f < item[i].score) {
        star[i].children[f].classList.add("checked")
    }
}}})