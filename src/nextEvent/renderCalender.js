export function renderCalendar(container, events) {

    let currentDate = new Date();

    function drawCalendar() {

        container.innerHTML = "";

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const calendar = document.createElement("div");
        calendar.classList.add("calendar");

        // header with navigation
        const header = document.createElement("div");
        header.classList.add("calendar-header");

        const prevBtn = document.createElement("button");
        prevBtn.textContent = "◀";

        const nextBtn = document.createElement("button");
        nextBtn.textContent = "▶";

        const title = document.createElement("h3");
        title.textContent = currentDate.toLocaleString("de-DE", {
            month: "long",
            year: "numeric"
        });

        // navigation events
        prevBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            drawCalendar();
        });

        nextBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            drawCalendar();
        });

        header.appendChild(prevBtn);
        header.appendChild(title);
        header.appendChild(nextBtn);

        calendar.appendChild(header);

        // grid
        const grid = document.createElement("div");
        grid.classList.add("calendar-grid");

        // empty field
        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
            grid.appendChild(document.createElement("div"));
        }

        // days
        for (let day = 1; day <= daysInMonth; day++) {

            const cell = document.createElement("div");
            cell.classList.add("calendar-day");
            cell.textContent = day;

            const currentDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            // mark events red
            const hasEvent = events.some(e => e.date === currentDateStr);
            if (hasEvent) {
                cell.style.background = "#ff2e63";
                cell.style.color = "white";
            }

            // mark mondays blue
            const dateObj = new Date(year, month, day);
            if (dateObj.getDay() === 1) {
                cell.style.border = "2px solid #1f6feb";
            }

            grid.appendChild(cell);
        }

        calendar.appendChild(grid);
        container.appendChild(calendar);
    }

    drawCalendar();
}