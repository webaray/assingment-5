document.getElementById("login-btn")
.addEventListener("click", function() {

    const usernameInput = document.getElementById("input-username");
    const userName = usernameInput.value;
    
    const userPass = document.getElementById("input-password");
    const loginPass= userPass.value;

    if( userName === "admin" && loginPass === "admin123"){

        alert("Login Successfully")

        window.location.assign("/home.html")
    }else{
        alert("Invalid information")
        return;
    }
    
});

