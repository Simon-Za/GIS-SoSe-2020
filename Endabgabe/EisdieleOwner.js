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
        order.innerHTML += "Name: " + diesdas[0].name + "<br>";
        order.innerHTML += "Address: " + diesdas[0].address + "<br>";
        order.innerHTML += "Comment: " + diesdas[0].Comment + "<br>";
        order.innerHTML += "Vessel: " + diesdas[0].Vessel + "<br>";
        order.innerHTML += "Flavor1: " + Endabgabe.addFlavorList[parseInt(diesdas[0].Flavor1)].parentElement?.children[1] + "<br>";
        if (diesdas[0].Flavor2 != null) {
            order.innerHTML += "Flavor2: " + Endabgabe.addFlavorList[parseInt(diesdas[0].Flavor2)].parentElement?.children[1] + "<br>";
        }
        if (diesdas[0].Flavor3 != null) {
            order.innerHTML += "FLavor3: " + Endabgabe.addFlavorList[parseInt(diesdas[0].Flavor3)].parentElement?.children[1] + "<br>";
        }
        order.innerHTML += "Sauce: " + diesdas[0].Sauce + "<br>";
        order.innerHTML += "Topping: " + diesdas[0].Topping + "<br>";
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