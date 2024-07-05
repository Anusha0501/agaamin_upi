const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const myForm = document.getElementById("myForm");

function generateCaptcha() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaText.textContent = captcha;
}
document.addEventListener("submit", function(event) {
    if (captchaInput.value.toLowerCase() === captchaText.textContent.toLowerCase()) {
        console.log("Captcha verified!"); // Add this line
        window.location.href = "Page-2.html"; 
    } else {
        console.log("Captcha input:", captchaInput.value.toLowerCase()); // Add this line
        console.log("Captcha text:", captchaText.textContent.toLowerCase()); // Add this line
        alert("Incorrect Captcha. Please try again.");
        generateCaptcha();
        captchaInput.value = "";
    }

    } );// <-- Closing curly brace was missing here

generateCaptcha();
