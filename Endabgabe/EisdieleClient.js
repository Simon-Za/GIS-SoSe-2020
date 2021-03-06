"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("sendButton")?.addEventListener("click", sendData);
    async function sendData() {
        alert("Order sent");
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/sendData?" + query.toString() + "&Vessel=" + localStorage.getItem("Vessel");
        let counter = parseInt(localStorage.getItem("counter"));
        for (let i = 1; i <= counter; i++) {
            url += "&Flavor" + i + "=" + localStorage.getItem("Flavor" + i);
        }
        url += "&Sauce" + "=" + localStorage.getItem("Sauce");
        url += "&Topping" + "=" + localStorage.getItem("Topping");
        console.log(url);
        await fetch(url);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=EisdieleClient.js.map