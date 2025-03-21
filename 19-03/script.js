const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const button = document.querySelector("#button");
const successMessage = document.querySelector("#success-message");

function cadUser(event) {
    event.preventDefault();
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue && senhaValue) {
        successMessage.style.display = "block";
        email.value = "";
        senha.value = "";
    }
}
button.addEventListener("click", cadUser);
