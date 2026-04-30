export function resetBorderOnInput(el) {
    el.addEventListener("input", () => {
        el.style.border = "2px solid transparent";
    });
}