/* import { Db, MongoClient } from "mongodb"; */

namespace Endabgabe {

    interface Bestellung {
        id: string;
        name: string;
        address: string;
        Comment: string;
        Vessel: string;
        Flavor1: string;
        Flavor2: string;
        Flavor3: string;
        Sauce: string;
        Topping: string;
    }

    document.getElementById("getButton")?.addEventListener("click", getData);
    let main: HTMLElement = document.getElementById("main") as HTMLElement;
    //let counter: number = parseInt(localStorage.getItem("counter")!);


    let div: HTMLElement = document.createElement("div");
    div.setAttribute("id", "Bestellungen");
    main.appendChild(div);


    async function getData(): Promise<void> {

        //let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com";
        //let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/getData";

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let diesdas: Bestellung[] = JSON.parse(responseText);


        console.log(diesdas);
        console.log(addFlavorList);

        for (let i: number = 0; i < diesdas.length; i++) {

            let order: HTMLParagraphElement = document.createElement("p");
            order.innerHTML += "Order: " + i + 1;
            order.innerHTML += "Name: " + diesdas[i].name + "<br>";
            order.innerHTML += "Address: " + diesdas[i].address + "<br>";
            order.innerHTML += "Comment: " + diesdas[i].Comment + "<br>";
            order.innerHTML += "Vessel: " + diesdas[i].Vessel + "<br>";
            order.innerHTML += "Flavor1: " + addFlavorList[parseInt(diesdas[i].Flavor1)] + "<br>";
            /*  if (diesdas[i].Flavor2 != null) {
                 order.innerHTML += "Flavor2: " + addFlavorList[parseInt(diesdas[i].Flavor2)].parentElement?.children[1] + "<br>";
             }
             if (diesdas[i].Flavor3 != null) {
                 order.innerHTML += "FLavor3: " + addFlavorList[parseInt(diesdas[i].Flavor3)].parentElement?.children[1] + "<br>";
             } */
            order.innerHTML += "Sauce: " + diesdas[i].Sauce + "<br>";
            order.innerHTML += "Topping: " + diesdas[i].Topping + "<br>";
            order.innerHTML += "hellooo";

            let deleteOrder: HTMLButtonElement = document.createElement("button");
            deleteOrder.innerHTML = "delete Order";
            deleteOrder.setAttribute("id", diesdas[i].id);
            deleteOrder.addEventListener("click", deleteOrderFunc);



            div.appendChild(deleteOrder);
            div.appendChild(order);
        }


        //console.log(url);
        //await fetch(url);

        //let response: Response = await fetch(url);
        //let responseText: string = await response.text();

    }

    async function deleteOrderFunc(_event: Event): Promise<void> {
        let target: HTMLElement = <HTMLElement>_event.target;
        let targetIndex: number = parseFloat(target.getAttribute("id")!);
        let url: string = "https://gissose2020.herokuapp.com";
        url += "/deleteItem?" + "id=" + targetIndex;
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
}