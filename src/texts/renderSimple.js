export function renderSimple(parent, text) {
    const p = document.createElement("p");
    p.textContent = text;
    parent.appendChild(p);
}