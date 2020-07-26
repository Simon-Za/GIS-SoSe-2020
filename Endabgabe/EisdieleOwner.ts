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

        let url: string = "https://gissose2020.herokuapp.com";
        url += "/getData";

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let bestellungen: Bestellung[] = JSON.parse(responseText);


        console.log(bestellungen);

        for (let i: number = 0; i < bestellungen.length; i++) {


            let order: HTMLParagraphElement = document.createElement("p");
            let orderIndex: number = i + 1;
            order.innerHTML += "Order: " + orderIndex + "<br>";
            order.innerHTML += "Name: " + bestellungen[i].name + "<br>";
            order.innerHTML += "Address: " + bestellungen[i].address + "<br>";
            order.innerHTML += "Comment: " + bestellungen[i].Comment + "<br>";
            order.innerHTML += "Vessel: " + bestellungen[i].Vessel + "<br>";

            function getFlavor1(): string {
                let flavorname: string = "";

                if (bestellungen[i].Flavor1 == "0") {
                    flavorname = "Lemon";
                }
                if (bestellungen[i].Flavor1 == "1") {
                    flavorname = "Strawberry";
                }
                if (bestellungen[i].Flavor1 == "2") {
                    flavorname = "Melon";
                }
                if (bestellungen[i].Flavor1 == "3") {
                    flavorname = "Mango";
                }
                if (bestellungen[i].Flavor1 == "4") {
                    flavorname = "Apple";
                }
                if (bestellungen[i].Flavor1 == "5") {
                    flavorname = "Blueberry";
                }
                if (bestellungen[i].Flavor1 == "6") {
                    flavorname = "Kiwi";
                }
                if (bestellungen[i].Flavor1 == "7") {
                    flavorname = "Pineapple";
                }
                if (bestellungen[i].Flavor1 == "8") {
                    flavorname = "Vanilla";
                }
                if (bestellungen[i].Flavor1 == "9") {
                    flavorname = "After 8";
                }
                if (bestellungen[i].Flavor1 == "10") {
                    flavorname = "Cookie";
                }
                if (bestellungen[i].Flavor1 == "11") {
                    flavorname = "Yoghurt";
                }
                if (bestellungen[i].Flavor1 == "12") {
                    flavorname = "Chocolate";
                }
                if (bestellungen[i].Flavor1 == "13") {
                    flavorname = "Dark Choc";
                }
                if (bestellungen[i].Flavor1 == "14") {
                    flavorname = "Nougat";
                }
                if (bestellungen[i].Flavor1 == "15") {
                    flavorname = "Walnut";
                }
                if (bestellungen[i].Flavor1 == "16") {
                    flavorname = "R-Ice";
                }
                if (bestellungen[i].Flavor1 == "17") {
                    flavorname = "Dentrif-Ice";
                }
                if (bestellungen[i].Flavor1 == "18") {
                    flavorname = "Licor-Ice";
                }
                if (bestellungen[i].Flavor1 == "19") {
                    flavorname = "sp-Ice-y";
                }
                return flavorname;
            }

            order.innerHTML += "Flavor1: " + getFlavor1() + "<br>";

            if (bestellungen[i].Flavor2 != null) {

                order.innerHTML += "Flavor2: " + getFlavor2() + "<br>";
            }
            function getFlavor2(): string {
                let flavorname: string = "";

                if (bestellungen[i].Flavor2 == "0") {
                    flavorname = "Lemon";
                }
                if (bestellungen[i].Flavor2 == "1") {
                    flavorname = "Strawberry";
                }
                if (bestellungen[i].Flavor2 == "2") {
                    flavorname = "Melon";
                }
                if (bestellungen[i].Flavor2 == "3") {
                    flavorname = "Mango";
                }
                if (bestellungen[i].Flavor2 == "4") {
                    flavorname = "Apple";
                }
                if (bestellungen[i].Flavor2 == "5") {
                    flavorname = "Blueberry";
                }
                if (bestellungen[i].Flavor2 == "6") {
                    flavorname = "Kiwi";
                }
                if (bestellungen[i].Flavor2 == "7") {
                    flavorname = "Pineapple";
                }
                if (bestellungen[i].Flavor2 == "8") {
                    flavorname = "Vanilla";
                }
                if (bestellungen[i].Flavor2 == "9") {
                    flavorname = "After 8";
                }
                if (bestellungen[i].Flavor2 == "10") {
                    flavorname = "Cookie";
                }
                if (bestellungen[i].Flavor2 == "11") {
                    flavorname = "Yoghurt";
                }
                if (bestellungen[i].Flavor2 == "12") {
                    flavorname = "Chocolate";
                }
                if (bestellungen[i].Flavor2 == "13") {
                    flavorname = "Dark Choc";
                }
                if (bestellungen[i].Flavor2 == "14") {
                    flavorname = "Nougat";
                }
                if (bestellungen[i].Flavor2 == "15") {
                    flavorname = "Walnut";
                }
                if (bestellungen[i].Flavor2 == "16") {
                    flavorname = "R-Ice";
                }
                if (bestellungen[i].Flavor2 == "17") {
                    flavorname = "Dentrif-Ice";
                }
                if (bestellungen[i].Flavor2 == "18") {
                    flavorname = "Licor-Ice";
                }
                if (bestellungen[i].Flavor2 == "19") {
                    flavorname = "sp-Ice-y";
                }
                return flavorname;
            }

            if (bestellungen[i].Flavor3 != null) {
                order.innerHTML += "Flavor3: " + getFlavor3() + "<br>";
            }
            function getFlavor3(): string {
                let flavorname: string = "";

                if (bestellungen[i].Flavor3 == "0") {
                    flavorname = "Lemon";
                }
                if (bestellungen[i].Flavor3 == "1") {
                    flavorname = "Strawberry";
                }
                if (bestellungen[i].Flavor3 == "2") {
                    flavorname = "Melon";
                }
                if (bestellungen[i].Flavor3 == "3") {
                    flavorname = "Mango";
                }
                if (bestellungen[i].Flavor3 == "4") {
                    flavorname = "Apple";
                }
                if (bestellungen[i].Flavor3 == "5") {
                    flavorname = "Blueberry";
                }
                if (bestellungen[i].Flavor3 == "6") {
                    flavorname = "Kiwi";
                }
                if (bestellungen[i].Flavor3 == "7") {
                    flavorname = "Pineapple";
                }
                if (bestellungen[i].Flavor3 == "8") {
                    flavorname = "Vanilla";
                }
                if (bestellungen[i].Flavor3 == "9") {
                    flavorname = "After 8";
                }
                if (bestellungen[i].Flavor3 == "10") {
                    flavorname = "Cookie";
                }
                if (bestellungen[i].Flavor3 == "11") {
                    flavorname = "Yoghurt";
                }
                if (bestellungen[i].Flavor3 == "12") {
                    flavorname = "Chocolate";
                }
                if (bestellungen[i].Flavor3 == "13") {
                    flavorname = "Dark Choc";
                }
                if (bestellungen[i].Flavor3 == "14") {
                    flavorname = "Nougat";
                }
                if (bestellungen[i].Flavor3 == "15") {
                    flavorname = "Walnut";
                }
                if (bestellungen[i].Flavor3 == "16") {
                    flavorname = "R-Ice";
                }
                if (bestellungen[i].Flavor3 == "17") {
                    flavorname = "Dentrif-Ice";
                }
                if (bestellungen[i].Flavor3 == "18") {
                    flavorname = "Licor-Ice";
                }
                if (bestellungen[i].Flavor3 == "19") {
                    flavorname = "sp-Ice-y";
                }
                return flavorname;
            }

            let saucename: string = "";

            if (bestellungen[i].Sauce == "0") {
                saucename = "Choco";
            }
            if (bestellungen[i].Sauce == "1") {
                saucename = "Strawberry";
            }
            if (bestellungen[i].Sauce == "2") {
                saucename = "Gold";
            }
            if (bestellungen[i].Sauce == "3") {
                saucename = "Tears";
            }

            order.innerHTML += "Sauce: " + saucename + "<br>";


            //order.innerHTML += "Topping: " + bestellungen[i].Topping + "<br>";

            let deleteOrder: HTMLButtonElement = document.createElement("button");
            deleteOrder.innerHTML = "delete Order";
            deleteOrder.setAttribute("idA", bestellungen[i].id);
            deleteOrder.addEventListener("click", deleteOrderFunc);

            let acceptOrder: HTMLButtonElement = document.createElement("button");
            acceptOrder.innerHTML = "accept Order";
            acceptOrder.setAttribute("idA", bestellungen[i].id);
            acceptOrder.addEventListener("click", acceptOrderFunc);



            div.appendChild(deleteOrder);
            div.appendChild(acceptOrder);
            div.appendChild(order);
        }

    }
    function deleteOrderFunc(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let targetIndex: number = parseFloat(target.getAttribute("idA")!);
        console.log(targetIndex);
        let url: string = "https://gissose2020.herokuapp.com";
        url += "/deleteItem?" + "id=" + targetIndex;
        fetch(url);
        location.reload();
        getData();
    }
    async function acceptOrderFunc(_event: Event): Promise<void> {
        let target: HTMLElement = <HTMLElement>_event.target;
        let targetIndex: number = parseFloat(target.getAttribute("idA")!);
        let url: string = "https://gissose2020.herokuapp.com";
        url += "/acceptOrder?" + "id=" + targetIndex;
        fetch(url);
    }
}

