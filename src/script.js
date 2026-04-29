import {buttonNames, texts} from "./inputText.js";
import {openEmail} from "./sentEmail.js";


export function loadContent(field) {
    const content = document.getElementById('content');
    const index = field - 1;

    content.innerHTML = `
    <h2>${buttonNames[index]}</h2>
    <div class="text-block">
      ${texts[index]}
    </div>
  `;

    // 👇 Event NACH dem Rendern binden
    if (index === 1) {
        const btn = document.getElementById("sentEmail");

        if (btn) {
            btn.addEventListener("click", openEmail);
        }
    }
}