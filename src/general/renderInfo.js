export function renderInfo(parent) {
    const data = [
        ["Wer", "Feuerwehr, Rettungsdienst & co, sowie alle aus dem medizinisch-technischem Ehrenamt"],
        ["Wann", "jeden Montag 19.30"],
        ["Wo", "vor dem Blu - das Sportbad, Potsdam"],
        ["Wie", "einfach vorbeikommen - so dass wir pünklicht los können"],
        ["Warum", "weil Gemeinschaft, Bewegung und Austausch wichtig sind"],
        ["Noch Fragen, Anmerkungen oder eigene Ideen:", "Melde dich unter Kontakt bei mir!"]
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