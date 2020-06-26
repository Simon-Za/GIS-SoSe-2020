"use strict";
var A09Server;
(function (A09Server) {
    document.getElementById("button1").addEventListener("click", gibResponse);
    document.getElementById("button2").addEventListener("click", gibResponseJson);
    async function gibResponse() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += "/html?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let tekscht = document.createElement("p");
        tekscht.innerHTML = responseText;
        document.body.appendChild(tekscht);
    }
    async function gibResponseJson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += "/json?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        //await response.text();
        //let jsonString: string = JSON.stringify(url);
        //response.write(jsonString);
        console.log((responseText));
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=client.js.map