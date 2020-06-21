"use strict";
var A08Server;
(function (A08Server) {
    document.getElementById("button").addEventListener("click", serverDaten);
    async function serverDaten() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        console.log((await fetch(url)).url);
    }
})(A08Server || (A08Server = {}));
//# sourceMappingURL=client.js.map