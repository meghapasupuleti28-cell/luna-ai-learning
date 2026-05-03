function toggleMenu(){

let nav = document.getElementById("navMenu");

if(nav.style.display === "block"){
nav.style.display = "none";
}
else{
nav.style.display = "block";
}

}


// CHATBOT MESSAGE

function sendMessage(){

let input = document.getElementById("userInput");
let chatArea = document.getElementById("chatArea");

let userText = input.value.trim();

if(userText === "") return;


// USER MESSAGE
chatArea.innerHTML += "<p><b>You:</b> " + userText + "</p>";


// BOT REPLY
let botReply = "I'm Luna AI 🤖. For detailed help, use the Watson chatbot at the bottom right.";

chatArea.innerHTML += "<p><b>Luna AI:</b> " + botReply + "</p>";

input.value = "";

chatArea.scrollTop = chatArea.scrollHeight;

}


// SEND MESSAGE WITH ENTER KEY

document.addEventListener("DOMContentLoaded", function(){

let input = document.getElementById("userInput");

if(input){

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){
sendMessage();
}

});

}

});
