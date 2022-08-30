const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", () => {
    if (email.value.length == 0) {
        alert("error email must be at least one character");
    }
    else if (password.value.length == 0) {
        alert("error password must be at least one character");
    } else {
        alert("success");
        window.location = "principal.html";
    }
});
