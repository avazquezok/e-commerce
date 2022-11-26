//Reddiriciona si email esta vacio
function redirect() {

    if (userEmail === null) {
        alert('Please login first');
        location.href = "index.html";
    }
}
redirect();

let profileEmail = document.getElementById("email").setAttribute('value', userEmail);

//variables
let inputPrimerNombre = document.getElementById("primerNombre");
let inputSegundoNombre = document.getElementById("segundoNombre");
let inputPrimerApellido = document.getElementById("primerApellido");
let inputSegundoApellido = document.getElementById("segundoApellido");
let inputEmail = document.getElementById("email");
let inputTelefonoContacto = document.getElementById("telefonoContacto");
let imagenPerfil = document.getElementById("imagenPerfil");
let containerImagenPerfil = document.getElementById("containerImagenPerfil");


//guardar perfil en local storage 
function storageProfileData(primerNombre, segundoNombre, primerApellido, segundoApellido, email, telefonoContacto,) {
    let arrayVacio = [];
    let profile = {

        primerNombre: primerNombre,
        segundoNombre: segundoNombre,
        primerApellido: primerApellido,
        segundoApellido: segundoApellido,
        telefonoContacto: telefonoContacto,
        email: email,
    }
    arrayVacio.push(profile);
    localStorage.setItem("userProfile", JSON.stringify(arrayVacio));
    console.log(profile);
    console.log(arrayVacio);
}
//Mostrar datos guardados en localStorage
function showProfileData() {
    let profileDataStored = JSON.parse(localStorage.getItem("userProfile"));
    if(!profileDataStored) return -1

    
    let { primerNombre, segundoNombre, primerApellido, segundoApellido, email, telefonoContacto } = profileDataStored[0];
    inputPrimerNombre.setAttribute("value", primerNombre);
    inputSegundoNombre.setAttribute("value", segundoNombre);
    inputPrimerApellido.setAttribute("value", primerApellido);
    inputSegundoApellido.setAttribute("value", segundoApellido);
    inputEmail.setAttribute("value", email);
    inputTelefonoContacto.setAttribute("value", telefonoContacto);
}
document.addEventListener("DOMContentLoaded", function () {
    showProfileData();
})

   
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (form.checkValidity()) {
                    storageProfileData(inputPrimerNombre.value, inputSegundoNombre.value, inputPrimerApellido.value, inputSegundoApellido.value, inputEmail.value, inputTelefonoContacto.value)
                }
                else {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
 