"use strict";
var A08Server;
(function (A08Server) {
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    //formData.append(serverDaten);
    async function serverDaten() {
        let url = "https://gissose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        await fetch(url);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=client.js.map