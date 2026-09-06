//Accepting inputs form the user

//EASY WAY - with a window prompt

let username = window.prompt("What's your name?");
console.log(username);

//Difficult WAY - html textbox
let userName;
document.getElementById("myBtn").onclick = function(){
    userName = document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("myLabel").innerHTML = "Hello " + userName;
}