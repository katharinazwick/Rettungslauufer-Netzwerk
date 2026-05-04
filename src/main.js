import { loadContent } from "./general/loadConent.js";
import { buttonNames } from "./general/buttonNames.js";
import {routes} from "./general/routeMapping.js";

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach((btn, i) => {
        btn.textContent = buttonNames[i];

        btn.addEventListener('click', () => {
            loadContent(i + 1);
        });
    });

    // back and forward
    window.onpopstate = function (event) {
        if (event.state) {
            loadContent(event.state.page + 1, false);
        }
    };

    // read url
    const path = window.location.pathname;
    const field = routes[path] || 1;

    loadContent(field, false);
});