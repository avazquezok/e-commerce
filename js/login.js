const login = document.getElementById("login");
const password = document.getElementById("password");
const email = document.getElementById("email");

login.addEventListener("click", () => {
    if (password!==null && email!==null) {
        alert("success");
        window.location.href = "http://www.w3schools.com";
    } else {
        alert("error");
    }
})
