import {nextEvents} from "./nextEvents.js";
import {renderCalendar} from "./renderCalender.js";
import {formatDate} from "./formatDate.js";

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

    // left side for events
    const left = document.createElement("div");
    left.classList.add("events-left");
    Object.assign(left.style, {
    })

    // right side for calender
    const right = document.createElement("div");
    right.classList.add("events-right");

    const calendarPlaceholder = document.createElement("div");
    calendarPlaceholder.classList.add("calendar-placeholder");
    renderCalendar(right, nextEvents);

    right.appendChild(calendarPlaceholder);

    // include all events
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
        const data = formatDate(event.date);
        date.innerHTML = `<strong>Wann:</strong> ${data}`;

        const place = document.createElement("p");
        place.innerHTML = `<strong>Wo:</strong> ${event.place}`;

        const infos = document.createElement("p");
        infos.textContent = event.infos;

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(infos);

        left.appendChild(card);
    });

    wrapper.appendChild(left);
    wrapper.appendChild(right);

    parent.appendChild(wrapper);
}