export function renderInfo(parent) {
    const data = [
        ["Wer", "Feuerwehr, Rettungsdienst & alle aus dem medizin-technischem Ehrenamt"],
        ["Wann", "Jeden Montag um 19:00 Uhr"],
        ["Wo", "KEINE AHNUNG"],
        ["Wie", "Einfach vorbeikommen, idealerweise etwas früher zum Umziehen & Kennenlernen"],
        ["Warum", "Weil Gemeinschaft, Bewegung und Austausch wichtig sind"],
        ["Noch Fragen oder Anmerkungen", "Melde dich unter Kontakt bei mir"]
    ];

    data.forEach(([title, text]) => {
        const p = document.createElement("p");

        const strong = document.createElement("strong");
        strong.textContent = title + ": ";

        p.appendChild(strong);
        p.appendChild(document.createTextNode(text));

        parent.appendChild(p);
    });
}