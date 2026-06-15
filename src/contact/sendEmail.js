(function() {
    emailjs.init("9HNgWWXfB4SR6ak0k");
})();

export function sendEmail(email, name, title, message) {

    const params = {
        email: email,
        name: name,
        title: title,
        message: message
    };
    emailjs.send("service_0hdhiaa", "template_zhaxcxq", params)
        .then(() => {
            alert("Email erfolgreich gesendet!");
        })
        .catch((error) => {
            console.error("Fehler:", error);
            alert("Fehler beim Senden!");
        });
}

