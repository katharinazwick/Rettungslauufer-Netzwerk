import {buttonNames, whoWeAre} from "./buttonNames.js";
import {renderAbout} from "./renderAbout.js";
import {renderInfo} from "./renderInfo.js";
import {renderNextEvent} from "../nextEvent/renderNextEvent.js";
import {renderSimple} from "../previouslyEvent/renderSimple.js";
import {renderContact} from "../contact/renderContact.js";
import {routes} from "./routeMapping.js";

export function loadContent(field, addToHistory = true) {
    const content = document.getElementById("content");
    const index = field - 1;

    const routesArray = Object.keys(routes);

    content.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = buttonNames[index];
    content.appendChild(h2);

    if (addToHistory) {
        history.pushState({ page: index }, "", routesArray[index]);
    }

    if (index === 0) renderAbout(content);
    if (index === 1) renderInfo(content);
    if (index === 2) renderNextEvent(content);
    if (index === 3) renderSimple(content, "Coming soon...");
    if (index === 4) renderContact(content);
}