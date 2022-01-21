document.querySelector("#leftlogin").addEventListener("submit", loginfun);
var data = JSON.parse(localStorage.getItem("userdata"));
// console.log(data.length)

function loginfun(event) {
    event.preventDefault();
    console.log("raju")
    var email = document.querySelector("#mail").value;
    var pass = document.querySelector("#pass").value;

    // console.log(email, pass)
    var flag = false;
    if (email == "admin" && pass == "admin") {
        window.location.href = "Home.html"
        alert("Only Uses Admin")

    }
    else if (email == "" && pass == "") {
        alert("Please enter a valid user id")
    }
    // console.log("this is raju")
    else {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email == email && data[i].password == pass) {
                // window.location.href="cart.html"
                flag = true
            }


        }
        if (flag) {
            alert('Login Successuful')
            window.location.href = "Home.html"
        }
        else {
            alert("Please create account")
        }
    }


}