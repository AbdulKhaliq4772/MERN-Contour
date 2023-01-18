let username = document.querySelector("#username");
let email = document.querySelector("#email");
let projectName = document.querySelector("#project-name");
let projectDescription = document.querySelector("#project-description");

let userNameMsg = document.querySelector(".user-name-msg");
let emailMsg = document.querySelector(".email-msg");
let projectNameMsg = document.querySelector(".project-name-msg");
let projectDescriptionMsg = document.querySelector(".project-description-msg");

function validation(){
    if(username.value!=""){
        userNameMsg.innerHTML = "valid";
        username.style.borderColor = "green";
        userNameMsg.style.color = "green";
    } else {
        userNameMsg.innerHTML = "Field is required";
        userNameMsg.style.color = "red";
        username.style.borderColor = "red";
    }

    let emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

    if(email.value.match(emailRegex)){
        email.innerHTML = "valid";
        email.style.borderColor = "green";
        emailMsg.style.color = "green";
    } else if (email.value==""){
        emailMsg.innerHTML = "Field is required";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
    } else {
        emailMsg.innerHTML = "Invalid";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
    }

    if(projectName.value!=""){
        projectNameMsg.innerHTML = "valid";
        projectName.style.borderColor = "green";
        projectNameMsg.style.color = "green";
    } else {
        projectNameMsg.innerHTML = "Field is required";
        projectNameMsg.style.color = "red";
        projectName.style.borderColor = "red";
    }

    if(projectDescription.value!=""){
        projectDescriptionMsg.innerHTML = "valid";
        projectDescription.style.borderColor = "green";
        projectDescriptionMsg.style.color = "green";
    } else {
        projectDescriptionMsg.innerHTML = "Field is required";
        projectDescriptionMsg.style.color = "red";
        projectDescription.style.borderColor = "red";
    }
}