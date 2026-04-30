import {loadContent} from "./loadConent.js";
import {buttonNames} from "./texts/buttonNames.js";

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((btn, i) => {
        btn.textContent = buttonNames[i]; // setzt Button-Namen automatisch

        btn.addEventListener('click', () => {
            loadContent(i + 1);
        });
    });

    // Startseite laden
    loadContent(1);
});
