let h2 = document.getElementById("h2");
let loginButton = document.getElementById("loginButton");

loginButton.onclick = function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "admin"){
         window.location.href = 'https://mateuszgajdowicz.github.io/UserPage/' + encodeURIComponent(username);
    } else {
        h2.textContent = "Invalid username or password";
    }
};
