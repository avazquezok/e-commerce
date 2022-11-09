function redirect () {

if (userEmail === null) {
    alert('Please login first');
    location.href = "index.html";
}
}
redirect();

let profileEmail = document.getElementById("email").setAttribute('value',userEmail);
function showUserEmail () {

}

function validateProfile () { 

}
function saveProfileChanges () {

}