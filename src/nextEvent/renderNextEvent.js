import {nextEvents} from "./nextEvents.js";
import {renderCalendar} from "./renderCalender.js";

export function renderNextEvent(parent) {

    parent.innerHTML = "";

    // 🔲 Layout Container
    const wrapper = document.createElement("div");
    wrapper.classList.add("events-layout");
    Object.assign(wrapper.style,
        {
            display: "flex",
            flexDirection: "rows",
            gap: "20px",
            alignItems: "flex-start"
        })

    // ⬅️ Linke Seite (Events)
    const left = document.createElement("div");
    left.classList.add("events-left");
    Object.assign(left.style, {
        //flex: 1
    })

    // ➡️ Rechte Seite (Kalender)
    const right = document.createElement("div");
    right.classList.add("events-right");
    Object.assign(right.style, {
       // width: "320px",
        //minWidth: "280px"
    })

    // 📅 Platzhalter Kalender
    const calendarPlaceholder = document.createElement("div");
    calendarPlaceholder.classList.add("calendar-placeholder");
    renderCalendar(right, nextEvents);

    right.appendChild(calendarPlaceholder);

    // 🔁 Events durchgehen
    nextEvents.forEach(event => {

        const card = document.createElement("div");
        card.classList.add("event-card");
        card.style.border = "1px solid black";
        Object.assign(card.style,
            {
                border: "1px solid red",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px"
            })

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

        left.appendChild(card);
    });

    // zusammenbauen
    wrapper.appendChild(left);
    wrapper.appendChild(right);

    parent.appendChild(wrapper);
}