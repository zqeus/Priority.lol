//function to validate user and password

function loginValidation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log("working function!!!")
    
    if(username == "vishal" && password == "1234") {
        window.location.assign("home.html");
        alert("Correct Username and Password :)");
    }
    else if (username != "" || password != "") {
        window.location.assign("index.html");
        alert("Invalid UserName and Password\nPlease enter correct Username and Password"); 
        document.getElementById('username').value = null;
        document.getElementById('password').value = null;
    }
    else {
        // window.location.assign("login.html");
        alert("Please enter Username and Password"); 
    }
}
