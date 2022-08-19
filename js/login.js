const login = document.getElementById("login");
const password = document.getElementById("password");
const email = document.getElementById("email");

login.addEventListener("click", () => {
    if (password!==null && email!==null) {
        alert("success");
        window.location.href = "https://dullkarlmarx.github.io/e-comerce/principal.html";
    } else {
        alert("error");
    }
})
