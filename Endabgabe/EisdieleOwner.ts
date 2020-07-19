namespace Endabgabe {

    interface Bestellung {
        id: string;
        name: string;
        address: string;
        Comment: string;
        Vessel: string;
        Flavor1: string;
        Flavor2?: string;
        Flavor3?: string;
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

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/getData";

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let diesdas: Bestellung[] = JSON.parse(responseText);

        
        console.log(diesdas);

        let order: HTMLParagraphElement = document.createElement("p");
        order.innerHTML += "Name" + diesdas[0].name + "<br>";
        order.innerHTML += "Addres" + diesdas[0].address + "<br>";
        order.innerHTML += "Comment" + diesdas[0].Comment + "<br>";
        order.innerHTML += "Vessel" + diesdas[0].Vessel + "<br>";
        order.innerHTML += "Flavor1" + diesdas[0].Flavor1 + "<br>";
        order.innerHTML += "Flavor2" + diesdas[0].Flavor2 + "<br>";
        order.innerHTML += "FLavor3" + diesdas[0].Flavor3 + "<br>";
        order.innerHTML += "Sauce" + diesdas[0].Sauce + "<br>";
        order.innerHTML += "Topping" + diesdas[0 ].Topping + "<br>";
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
}