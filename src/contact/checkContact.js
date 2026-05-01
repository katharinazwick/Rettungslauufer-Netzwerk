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

    // check real email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
        email.style.border = "2px solid red";
        isValid = false;
    }

    //check name, title and message is full
    if (!nameValue || nameValue.trim() === "") {
        name.style.border = "2px solid red";
        isValid = false;
    }

    if (!titleValue || titleValue.trim() === "") {
        title.style.border = "2px solid red";
        isValid = false;
    }

    if (!messageValue || messageValue.trim() === "") {
        message.style.border = "2px solid red";
        isValid = false;
    }

    if (isValid) {
        sendEmail(emailValue, nameValue, titleValue, messageValue);
    }
}