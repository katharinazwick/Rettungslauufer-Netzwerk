export function renderNextEvent(parent) {
    const texts = [
        "Coming soon...",
    ];

    texts.forEach(t => {
        const p = document.createElement("p");
        p.textContent = t;
        parent.appendChild(p);
    });
}