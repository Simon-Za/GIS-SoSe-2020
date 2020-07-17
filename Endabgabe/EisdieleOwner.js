"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("servershit")?.addEventListener("click", sendData);
    //let counter: number = parseInt(localStorage.getItem("counter")!);
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/getData?";
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        console.log(url);
        await fetch(url);
        //let response: Response = await fetch(url);
        //let responseText: string = await response.text();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=EisdieleOwner.js.map