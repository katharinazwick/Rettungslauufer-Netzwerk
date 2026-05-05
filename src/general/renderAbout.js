export function renderAbout(parent) {
    const texts = [
        "Oder besser: wer wollen wir werden?",
        "Ich bin Katharina und ehrenamtlich in der Wasserrettung aktiv.",
        "Mein Ziel ist es, eine unverbindliche Laufgruppe für Einsatzkräfte ins Leben zu rufen – als Ausgleich zum Alltag, zum Vernetzen und einfach, um gemeinsam aktiv zu sein.",
        "Daher möchte ich mich mit euch jeden Montag um 19:30 Uhr vor dem Blu Sportbad treffen.",
        "Ganz egal, ob Anfänger-/in oder regelmäßig unterwegs – jeder ist willkommen.",
        "Das Blu bietet öffentliche Toiletten, jedoch keine Schließfächer oder Umkleidemöglichkeiten. Bitte plant entsprechend.",
        "Eine regelmäßige Teilnahme ist keine Voraussetzung – kommt einfach vorbei, wenn ihr Zeit und Lust habt.",
    ];

    texts.forEach(t => {
        const p = document.createElement("p");
        p.textContent = t;
        parent.appendChild(p);
    });

    // last paragraph with highlighting
    const p = document.createElement("p");

    p.appendChild(document.createTextNode("Vielleicht bist du dabei und wir bauen gemeinsam Schritt für Schritt ein "));

    const strong = document.createElement("strong");
    strong.textContent = "Rettungsläufer Netzwerk";
    strong.style.color = "red";

    p.appendChild(strong);
    p.appendChild(document.createTextNode(" auf!"));

    parent.appendChild(p);

    const p2 = document.createElement("strong");
    p2.textContent = "Ich freue mich darauf am 15. Juni 2026 mit euch zu starten!";

    parent.appendChild(p2);
}
