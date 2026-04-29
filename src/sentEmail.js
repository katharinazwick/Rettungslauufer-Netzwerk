export function openEmail() {
    const email = "Katharina.Zwick@student.hpi.uni-potsdam.de";
    const subject = encodeURIComponent("Frage zum Rettungsläufer Netzwerk");
    const body = encodeURIComponent(
        "Hallo,\n\nHallo, ich habe folgende Frage:\n\n"
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

