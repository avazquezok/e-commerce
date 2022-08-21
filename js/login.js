    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    login.addEventListener("click", () => {
        if (password.value.length == 0) {
            alert("error password must be at least one character");
        } else if (email.value.length == 0) {
            alert("error email must be at least one character");
        }
        else {
            alert("success");
            window.location.href = "https://avazquezok.github.io/e-comerce/principal.html";
        }
    });
