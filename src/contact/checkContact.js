import {sendEmail} from "./sendEmail.js";
import {resetBorderOnInput} from "./resetBorderOnInput.js";

export function checkContact(email, name, title, message) {

    resetBorderOnInput(email);
    resetBorderOnInput(title);
    resetBorderOnInput(name);
    resetBorderOnInput(message);

    let isValid = true;

    const emailValue = email.value;
    const nameValue = name.value;
    const titleValue = title.value;
    const messageValue = message.value;

    // Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email check
    if (!emailValue || !emailRegex.test(emailValue)) {
        email.style.border = "2px solid red";
        isValid = false;
    }

    if (!nameValue || nameValue.trim() === "") {
        name.style.border = "2px solid red";
        isValid = false;
    }

    // title check
    if (!titleValue || titleValue.trim() === "") {
        title.style.border = "2px solid red";
        isValid = false;
    }

    // Message check
    if (!messageValue || messageValue.trim() === "") {
        message.style.border = "2px solid red";
        isValid = false;
    }

    if(isValid) {
        sendEmail(emailValue, nameValue, titleValue, messageValue);
    }
}