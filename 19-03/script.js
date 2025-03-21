const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const button = document.querySelector("#button");
const successMessage = document.querySelector("#success-message");

function cadUser(event) {
    event.preventDefault();
    window.location.href = "outra.html";
}
button.addEventListener("click", cadUser);
