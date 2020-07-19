"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("getButton")?.addEventListener("click", getData);
    let main = document.getElementById("main");
    //let counter: number = parseInt(localStorage.getItem("counter")!);
    let div = document.createElement("div");
    div.setAttribute("id", "Bestellungen");
    main.appendChild(div);
    async function getData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/getData";
        let response = await fetch(url);
        let responseText = await response.text();
        let diesdas = JSON.parse(responseText);
        console.log(diesdas);
        let order = document.createElement("p");
        order.innerHTML = diesdas.id.toString + "<br>";
        order.innerHTML += diesdas.name + "<br>";
        order.innerHTML += diesdas.address + "<br>";
        order.innerHTML += diesdas.Comment + "<br>";
        order.innerHTML += diesdas.Vessel + "<br>";
        order.innerHTML += diesdas.Flavor1 + "<br>";
        order.innerHTML += diesdas.Flavor2 + "<br>";
        order.innerHTML += diesdas.Flavor3 + "<br>";
        order.innerHTML += diesdas.Sauce + "<br>";
        order.innerHTML += diesdas.Topping + "<br>";
        order.innerHTML += "hello";
        div.appendChild(order);
        //console.log(url);
        //await fetch(url);
        //let response: Response = await fetch(url);
        //let responseText: string = await response.text();
    }
    /* async function sendData(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/sendData?" + query.toString() + "&Vessel=" + localStorage.getItem("Vessel");

        for (let i: number = 1; i <= counter; i++) {
            url += "&Flavor" + i + "=" + localStorage.getItem("Flavor" + i);
        }
        
        url += "&Sauce" + "=" + localStorage.getItem("Sauce");
        url += "&Topping" + "=" + localStorage.getItem("Topping");
        console.log(url);
        await fetch(url);

        //let response: Response = await fetch(url);
        //let responseText: string = await response.text();
 
    } */
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=EisdieleOwner.js.map