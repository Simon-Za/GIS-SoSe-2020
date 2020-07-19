namespace Endabgabe {

    localStorage.setItem("Flavor2" , "null");
    localStorage.setItem("Flavor3" , "null");

    //Entscheidung Waffel/Becher; entfernen der alten und spawnen der neuen Section
    let cone: HTMLElement = <HTMLElement>document.getElementById("Cone");
    cone?.addEventListener("click", chooseCone);

    function chooseCone(): void {
        document.getElementById("welcome")?.setAttribute("id", "chooseVesselInvis");
        document.getElementById("flavorsInvis")?.setAttribute("id", "fakeID");
        localStorage.setItem("Vessel", "Cone");
    }
    let cup: HTMLElement = <HTMLElement>document.getElementById("Cup");
    cup?.addEventListener("click", chooseCup);

    function chooseCup(): void {
        document.getElementById("welcome")?.setAttribute("id", "chooseVesselInvis");
        document.getElementById("flavorsInvis")?.setAttribute("id", "fakeID");
        localStorage.setItem("Vessel", "Cup");
    }

    //Auslesen des lc, um Darstellung festzulegen
    /* if(localStorage.getItem("Vessel") == "Cone") {
         //display cone
         let img: HTMLElement = document.createElement("img");
         img.setAttribute("src", /*hier Bild einfügen);
         img.setAttribute("alt", "Cone");
         document.getElementById("preview")?.appendChild(img);
     }
     if(localStorage.getItem("Vessel") == "Cup") {
         //display cup
         let img: HTMLElement = document.createElement("img");
         img.setAttribute("src", /*hier Bild einfügen);
         img.setAttribute("alt", "Cup");
         document.getElementById("preview")?.appendChild(img);
     }
 */

    //Flavors Indizes geben und eventListener adden
    let counter: number = 0;

    export const addFlavorList: NodeListOf<Element> = document.querySelectorAll(".addFlavor");
    console.log(addFlavorList);


    for (let index: number = 0; index < addFlavorList.length; index++) {
        let addFlavor: Element = addFlavorList[index];
        addFlavor.setAttribute("flavorIndex", index.toString());
        addFlavor.addEventListener("click", addFlavorFunc);
    }


    function addFlavorFunc(_event: Event): void {
        counter++;
        if (counter >= 3) {
            clickNextSauce();
        }

        let target: HTMLElement = <HTMLElement>_event.target;
        let flavorIndex: number = parseFloat(target.getAttribute("flavorIndex")!);
        let flavorImg: HTMLElement = document.createElement("img");
        /*  flavorImg.setAttribute("src", /*hier Bild einfügen + flavorIndex); */
        flavorImg.setAttribute("alt", "Flavor" + flavorIndex);
        document.getElementById("preview")?.appendChild(flavorImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Flavor" + counter, flavorIndex.toString());
        localStorage.setItem("counter",  counter.toString());
    }

    //Soßen Indizes geben und eventListener adden
    const addSauceList: NodeListOf<Element> = document.querySelectorAll(".addSauce");
    console.log(addSauceList);


    for (let index: number = 0; index < addSauceList.length; index++) {
        let addSauce: Element = addSauceList[index];
        addSauce.setAttribute("sauceIndex", index.toString());
        addSauce.addEventListener("click", addSauceFunc);
    }


    function addSauceFunc(_event: Event): void {
        counter++;

        if (counter >= 1) {
            openToppings();
        }

        let target: HTMLElement = <HTMLElement>_event.target;
        let sauceIndex: number = parseFloat(target.getAttribute("sauceIndex")!);
        let sauceImg: HTMLElement = document.createElement("img");
        /*  sauceImg.setAttribute("src", /*hier Bild einfügen + sauceIndex); */
        sauceImg.setAttribute("alt", "Sauce" + sauceIndex);
        sauceImg.setAttribute("id", "Scoop" + sauceIndex);
        document.getElementById("preview")?.appendChild(sauceImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Sauce", sauceIndex.toString());
    }


    //Toppings Indizes geben und eventListener adden
    const addToppingsList: NodeListOf<Element> = document.querySelectorAll(".addTopping");
    console.log(addToppingsList);


    for (let index: number = 0; index < addToppingsList.length; index++) {
        let addTopping: Element = addToppingsList[index];
        addTopping.setAttribute("toppingIndex", index.toString());
        addTopping.addEventListener("click", addToppingFunc);
    }


    function addToppingFunc(_event: Event): void {
        counter++;

        if (counter >= 1) {
            openOrder();
        }

        let target: HTMLElement = <HTMLElement>_event.target;
        let toppingIndex: number = parseFloat(target.getAttribute("toppingIndex")!);
        let toppingImg: HTMLElement = document.createElement("img");
        /*  toppingImg.setAttribute("src", /*hier Bild einfügen + toppingIndex); */
        toppingImg.setAttribute("alt", "Topping" + toppingIndex);
        document.getElementById("preview")?.appendChild(toppingImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Topping", toppingIndex.toString());
    }


    //Weiterleitung zur nächsten Seite

    function clickNextSauce(): void {
        top.location.replace("EisdieleSauce.html");
    }


    document.getElementById("nextSauce")?.addEventListener("click", openSauce);

    function openSauce(): void {
        location.replace("EisdieleSauce.html");
    }

    document.getElementById("nextToppings")?.addEventListener("click", openToppings);

    function openToppings(): void {
        location.replace("EisdieleToppings.html");
    }

    document.getElementById("nextOrder")?.addEventListener("click", openOrder);

    function openOrder(): void {
        location.replace("EisdieleOrder.html");
    }
}
