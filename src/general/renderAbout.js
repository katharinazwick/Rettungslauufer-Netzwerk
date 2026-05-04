export function renderAbout(parent) {
    const texts = [
        "Oder besser: wer wollen wir werden?",
        "Mein Ziel ist es, Ehrenämter und hauptberufliche Kräfte aus dem Rettungsdienst sowie dem medizinisch-technischen Dienst zu vereinen.",
        "Unter dem Konzept Gentle Running Club möchte ich mich mit euch unverbindlich wöchentlich zum gemeinsamen Laufen treffen.",
        "Dabei soll eine Gemeinschaft aus Menschen entstehen, die unterschiedlich, aber doch ähnlich sind.",
        "Je mehr Leute kommen, desto mehr unterschiedliche Geschwindigkeiten haben wir – und jeder kann auf seine Kosten kommen.",
        "Zusätzlich besteht die Möglichkeit, gemeinsam an Laufveranstaltungen oder anderen Events teilzunehmen.",
    ];

    texts.forEach(t => {
        const p = document.createElement("p");
        p.textContent = t;
        parent.appendChild(p);
    });

    // last paragraph with highlighting
    const p = document.createElement("p");

    p.appendChild(document.createTextNode("Vielleicht bist du dabei – und wir bauen gemeinsam ein "));

    const strong = document.createElement("strong");
    strong.textContent = "Rettungsläufer Netzwerk";
    strong.style.color = "red";

    p.appendChild(strong);
    p.appendChild(document.createTextNode(" auf!"));

    parent.appendChild(p);

    const p2 = document.createElement("strong");
    p2.textContent = "Das erste Treffen findet am xx. Juni 2026 statt!";

    parent.appendChild(p2);
}
