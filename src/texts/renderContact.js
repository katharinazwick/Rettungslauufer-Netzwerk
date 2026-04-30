import {checkContact} from "../contact/checkContact.js";

export function renderContact(parent) {
    const form = document.createElement("div");
    form.classList.add("contact-form");

    const email = document.createElement("input");
    email.type = "email";
    email.placeholder = "Deine Email";

    const name = document.createElement("input");
    name.type = "name";
    name.placeholder = "Dein Name";

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Betreff";

    const message = document.createElement("textarea");
    message.placeholder = "Deine Nachricht...";
    message.rows = 6;

    const privacyWrapper = document.createElement("div");
    privacyWrapper.classList.add("privacy-wrapper");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "privacy";

    const label = document.createElement("label");
    label.htmlFor = "privacy";

// Text + Link
    label.innerHTML = `Ich akzeptiere die 
  <a href="datenschutzerklärung.html" >Datenschutzerklärung</a>`;

    privacyWrapper.appendChild(checkbox);
    privacyWrapper.appendChild(label);

    const button = document.createElement("button");
    button.textContent = "Email senden";

    button.addEventListener("click", () => {
        const privacyChecked = document.getElementById("privacy").checked;
        if (!privacyChecked) {
            alert("Bitte Datenschutzerklärung akzeptieren!");
            return;
        }
        checkContact(email, name, title, message);
    });

    form.appendChild(email);
    form.appendChild(name);
    form.appendChild(title);
    form.appendChild(message);
    form.appendChild(privacyWrapper);
    form.appendChild(button);

    parent.appendChild(form);
}