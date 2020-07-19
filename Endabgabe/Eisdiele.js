"use strict";
var Endabgabe;
(function (Endabgabe) {
    localStorage.setItem("Flavor2", "null");
    localStorage.setItem("Flavor3", "null");
    //Entscheidung Waffel/Becher; entfernen der alten und spawnen der neuen Section
    let cone = document.getElementById("Cone");
    cone?.addEventListener("click", chooseCone);
    function chooseCone() {
        document.getElementById("welcome")?.setAttribute("id", "chooseVesselInvis");
        document.getElementById("flavorsInvis")?.setAttribute("id", "fakeID");
        localStorage.setItem("Vessel", "Cone");
    }
    let cup = document.getElementById("Cup");
    cup?.addEventListener("click", chooseCup);
    function chooseCup() {
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
    let counter = 0;
    Endabgabe.addFlavorList = document.querySelectorAll(".addFlavor");
    console.log(Endabgabe.addFlavorList);
    for (let index = 0; index < Endabgabe.addFlavorList.length; index++) {
        let addFlavor = Endabgabe.addFlavorList[index];
        addFlavor.setAttribute("flavorIndex", index.toString());
        addFlavor.addEventListener("click", addFlavorFunc);
    }
    function addFlavorFunc(_event) {
        counter++;
        if (counter >= 3) {
            clickNextSauce();
        }
        let target = _event.target;
        let flavorIndex = parseFloat(target.getAttribute("flavorIndex"));
        let flavorImg = document.createElement("img");
        /*  flavorImg.setAttribute("src", /*hier Bild einfügen + flavorIndex); */
        flavorImg.setAttribute("alt", "Flavor" + flavorIndex);
        document.getElementById("preview")?.appendChild(flavorImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Flavor" + counter, flavorIndex.toString());
        localStorage.setItem("counter", counter.toString());
    }
    //Soßen Indizes geben und eventListener adden
    const addSauceList = document.querySelectorAll(".addSauce");
    console.log(addSauceList);
    for (let index = 0; index < addSauceList.length; index++) {
        let addSauce = addSauceList[index];
        addSauce.setAttribute("sauceIndex", index.toString());
        addSauce.addEventListener("click", addSauceFunc);
    }
    function addSauceFunc(_event) {
        counter++;
        if (counter >= 1) {
            openToppings();
        }
        let target = _event.target;
        let sauceIndex = parseFloat(target.getAttribute("sauceIndex"));
        let sauceImg = document.createElement("img");
        /*  sauceImg.setAttribute("src", /*hier Bild einfügen + sauceIndex); */
        sauceImg.setAttribute("alt", "Sauce" + sauceIndex);
        sauceImg.setAttribute("id", "Scoop" + sauceIndex);
        document.getElementById("preview")?.appendChild(sauceImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Sauce", sauceIndex.toString());
    }
    //Toppings Indizes geben und eventListener adden
    const addToppingsList = document.querySelectorAll(".addTopping");
    console.log(addToppingsList);
    for (let index = 0; index < addToppingsList.length; index++) {
        let addTopping = addToppingsList[index];
        addTopping.setAttribute("toppingIndex", index.toString());
        addTopping.addEventListener("click", addToppingFunc);
    }
    function addToppingFunc(_event) {
        counter++;
        if (counter >= 1) {
            openOrder();
        }
        let target = _event.target;
        let toppingIndex = parseFloat(target.getAttribute("toppingIndex"));
        let toppingImg = document.createElement("img");
        /*  toppingImg.setAttribute("src", /*hier Bild einfügen + toppingIndex); */
        toppingImg.setAttribute("alt", "Topping" + toppingIndex);
        document.getElementById("preview")?.appendChild(toppingImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Topping", toppingIndex.toString());
    }
    //Weiterleitung zur nächsten Seite
    function clickNextSauce() {
        top.location.replace("EisdieleSauce.html");
    }
    document.getElementById("nextSauce")?.addEventListener("click", openSauce);
    function openSauce() {
        location.replace("EisdieleSauce.html");
    }
    document.getElementById("nextToppings")?.addEventListener("click", openToppings);
    function openToppings() {
        location.replace("EisdieleToppings.html");
    }
    document.getElementById("nextOrder")?.addEventListener("click", openOrder);
    function openOrder() {
        location.replace("EisdieleOrder.html");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Eisdiele.js.map