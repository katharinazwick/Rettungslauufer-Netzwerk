import {loadContent} from "./general/loadConent.js";
import {buttonNames} from "./general/buttonNames.js";

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((btn, i) => {
        btn.textContent = buttonNames[i];

        btn.addEventListener('click', () => {
            loadContent(i + 1);
        });
    });

    loadContent(1);
});
