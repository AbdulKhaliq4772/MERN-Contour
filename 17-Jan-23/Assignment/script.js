let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let msg = document.querySelectorAll("p");

function warning(){
    if(username.value != ""){
        msg[0].innerHTML = "Valid";
        username.style.borderColor = "green";
    } else {
        msg[0].innerHTML = "Field is required";
        msg[0].style.color = "red";
        username.style.borderColor = "red";
    }

    let mailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    if(email.value.match(mailRegex)){
        msg[1].innerHTML="valid";
        email.style.borderColor = "green";
    } else if(email.value == "") {
        msg[1].innerHTML = "Field is required";
        msg[1].style.color = "red";
        email.style.borderColor = "red";
    } else {
        msg[1].innerHTML = "Invalid";
        msg[1].style.color = "red";
        email.style.borderColor = "red";
    }


    if(password.value != ""){
        msg[2].innerHTML = "Valid";
        password.style.borderColor = "green";
    } else {
        msg[2].innerHTML = "Field is required";
        msg[2].style.color = "red";
        password.style.borderColor = "red";
    }


}