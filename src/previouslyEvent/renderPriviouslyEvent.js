import {previouslyEvent} from "./previouslyEvent.js";

export function renderPreviouslyEvent(parent) {

    parent.innerHTML = "";

    // 🔲 Layout Container
    const wrapper = document.createElement("div");
    wrapper.classList.add("events-layout");
    Object.assign(wrapper.style,
        {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start"
        })

    // 🔁 Events durchgehen
    previouslyEvent.forEach(event => {

        const card = document.createElement("div");
        card.classList.add("event-card");
        card.style.border = "1px solid black";
        Object.assign(card.style,
            {
                border: "1px solid red",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
                width: "100%",
            })

        const title = document.createElement("h3");
        title.textContent = event.name;

        const date = document.createElement("p");
        date.innerHTML = `<strong>Wann:</strong> ${event.date}`;

        const wo = document.createElement("p");
        wo.innerHTML = `<strong>Wo:</strong> ${event.wo}`;

        const infos = document.createElement("p");
        infos.textContent = event.infos;

        const picture = document.createElement("img");
        picture.src = event.image;

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(wo);
        card.appendChild(infos);
        card.appendChild(picture);

        wrapper.appendChild(card);
    });

    parent.appendChild(wrapper);
}