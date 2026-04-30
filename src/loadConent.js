import {buttonNames} from "./texts/buttonNames.js";
import {renderAbout} from "./texts/renderAbout.js";
import {renderInfo} from "./texts/renderInfo.js";
import {renderNextEvent} from "./texts/renderNextEvent.js";
import {renderSimple} from "./texts/renderSimple.js";
import {renderContact} from "./texts/renderContact.js";

export function loadContent(field) {
    const content = document.getElementById("content");
    const index = field - 1;

    // vorherigen Inhalt löschen
    content.innerHTML = "";

    // Überschrift
    const h2 = document.createElement("h2");
    h2.textContent = buttonNames[index];
    content.appendChild(h2);

    // je nach Seite Inhalt bauen
    if (index === 0) renderAbout(content);
    if (index === 1) renderInfo(content);
    if (index === 2) renderNextEvent(content);
    if (index === 3) renderSimple(content, "Coming soon...");
    if (index === 4) renderContact(content);
}