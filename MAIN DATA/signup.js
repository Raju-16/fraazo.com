document.querySelector("#form").addEventListener("submit", subfun);
var userstack = JSON.parse(localStorage.getItem("userdata")) || [];

var signuparr = [];
function subfun(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var mobile = document.querySelector("#mobile").value;
    var email = document.querySelector("#mail").value;
    var password = document.querySelector("#pass").value;

    var supobj = {
        name: name,
        mobile: mobile,
        email: email,
        password: password,
    }

    signuparr.push(supobj);

    if (name == "" || mobile == "" || email == "" || password == "") {
        alert("Please fill the details properly")
    }
    else {
        localStorage.setItem("userdata", JSON.stringify(signuparr));
        alert("Signup Sucessful")
        window.location.href = "login.html"
    }
}
