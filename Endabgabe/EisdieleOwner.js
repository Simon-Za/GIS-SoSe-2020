"use strict";
/* import { Db, MongoClient } from "mongodb"; */
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("getButton")?.addEventListener("click", getData);
    let main = document.getElementById("main");
    //let counter: number = parseInt(localStorage.getItem("counter")!);
    let div = document.createElement("div");
    div.setAttribute("id", "Bestellungen");
    main.appendChild(div);
    async function getData() {
        //let formData: FormData = new FormData(document.forms[0]);
        let url = "https://gissose2020.herokuapp.com";
        //let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/getData";
        let response = await fetch(url);
        let responseText = await response.text();
        let diesdas = JSON.parse(responseText);
        console.log(diesdas);
        for (let i = 0; i < diesdas.length; i++) {
            let order = document.createElement("p");
            order.innerHTML += "Order: " + i + 1;
            order.innerHTML += "Name: " + diesdas[i].name + "<br>";
            order.innerHTML += "Address: " + diesdas[i].address + "<br>";
            order.innerHTML += "Comment: " + diesdas[i].Comment + "<br>";
            order.innerHTML += "Vessel: " + diesdas[i].Vessel + "<br>";
            order.innerHTML += "Flavor1: " + Endabgabe.addFlavorList[parseInt(diesdas[i].Flavor1)].parentElement?.children[1] + "<br>";
            if (diesdas[i].Flavor2 != null) {
                order.innerHTML += "Flavor2: " + Endabgabe.addFlavorList[parseInt(diesdas[i].Flavor2)].parentElement?.children[1] + "<br>";
            }
            if (diesdas[i].Flavor3 != null) {
                order.innerHTML += "FLavor3: " + Endabgabe.addFlavorList[parseInt(diesdas[i].Flavor3)].parentElement?.children[1] + "<br>";
            }
            order.innerHTML += "Sauce: " + diesdas[i].Sauce + "<br>";
            order.innerHTML += "Topping: " + diesdas[i].Topping + "<br>";
            order.innerHTML += "hellooo";
            let deleteOrder = document.createElement("button");
            deleteOrder.innerHTML = "delete Order";
            deleteOrder.setAttribute("id", "deleteOrder");
            //deleteOrder.addEventListener("click", deleteOrderFunc);
            /*  function deleteOrderFunc(): void {
                 diesdas[i].deleteOne();
             }
 
 
             div.appendChild(deleteOrder); */
            div.appendChild(order);
        }
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