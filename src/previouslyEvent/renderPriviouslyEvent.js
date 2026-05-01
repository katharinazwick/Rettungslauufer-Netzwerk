import { previouslyEvent } from "./previouslyEvent.js";
import {groupByYear} from "./groupByYear.js";

export function renderPreviouslyEvent(parent) {

    parent.innerHTML = "";

    const wrapper = document.createElement("div");

    const grouped = groupByYear(previouslyEvent);

    // Jahre sortieren (neu → alt)
    const years = Object.keys(grouped).sort((a, b) => b - a);

    years.forEach(year => {

        // 📅 Jahr-Header
        const yearHeader = document.createElement("h2");
        yearHeader.textContent = year;
        yearHeader.id = "yearHeader";
        yearHeader.style.cursor = "pointer";

        // 📦 Container für Events
        const yearContainer = document.createElement("div");
        yearContainer.style.display = "none"; // 👈 zuerst zu

        // Klick → toggle
        yearHeader.addEventListener("click", () => {
            yearContainer.style.display =
                yearContainer.style.display === "none" ? "block" : "none";
        });

        // 🔁 Events dieses Jahres
        grouped[year].forEach(event => {

            const card = document.createElement("div");
            Object.assign(card.style, {
                border: "1px solid red",
                borderRadius: "10px",
                margin: "10px 0",
                padding: "10px"
            });

            const title = document.createElement("h3");
            title.textContent = event.name;

            const date = document.createElement("p");
            date.innerHTML = `<strong>Wann:</strong> ${event.date}`;

            const wo = document.createElement("p");
            wo.innerHTML = `<strong>Wo:</strong> ${event.wo}`;

            const infos = document.createElement("p");
            infos.textContent = event.infos;

            card.appendChild(title);
            card.appendChild(date);
            card.appendChild(wo);
            card.appendChild(infos);

            if(event.image) {
                const picture = document.createElement("img");
                picture.src = event.image;
                card.appendChild(picture);
            }

            yearContainer.appendChild(card);
        });

        wrapper.appendChild(yearHeader);
        wrapper.appendChild(yearContainer);
    });

    parent.appendChild(wrapper);
}