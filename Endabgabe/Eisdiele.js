"use strict";
var Endabgabe;
(function (Endabgabe) {
    let counterF;
    if (!localStorage.getItem("counter")) {
        counterF = 0;
    }
    else {
        counterF = parseInt(localStorage.getItem("counter"));
    }
    //window.addEventListener("onload", darstellungLaden);
    darstellungLaden();
    function darstellungLaden() {
        /*console.log("beepboop"); */
        let vesselImg = document.createElement("img");
        if (localStorage.getItem("Vessel") == "Cone") {
            //display cone           
            vesselImg.setAttribute("src", "Bilder/Waffel2.png");
            vesselImg.setAttribute("alt", "Cone");
        }
        if (localStorage.getItem("Vessel") == "Cup") {
            //display cup
            vesselImg.setAttribute("src", "Bilder/Cup2.svg");
            vesselImg.setAttribute("alt", "Cup");
        }
        document.getElementById("preview")?.appendChild(vesselImg);
        //display flavors
        for (let i = 1; i <= counterF; i++) {
            let flavorImg = document.createElement("img");
            let flavorIndex = parseInt(localStorage.getItem("Flavor" + i));
            flavorImg.setAttribute("src", "Bilder/Flavors/Flavor" + flavorIndex + ".png");
            flavorImg.setAttribute("id", "Scoop" + i);
            flavorImg.setAttribute("class", "Flavour");
            document.getElementById("preview")?.appendChild(flavorImg);
        }
        //display Sauce
        if (localStorage.getItem("Sauce")) {
            let sauceImg = document.createElement("img");
            let sauceIndex = parseInt(localStorage.getItem("Sauce"));
            sauceImg.setAttribute("src", "Bilder/sauces/DisplaySauces/Sauce" + sauceIndex + ".png");
            sauceImg.setAttribute("alt", "Sauce" + sauceIndex);
            if (counterF == 1) {
                sauceImg.setAttribute("id", "Sauce1F");
            }
            if (counterF == 2) {
                sauceImg.setAttribute("id", "Sauce2F");
            }
            if (counterF == 3) {
                sauceImg.setAttribute("id", "Sauce3F");
            }
            document.getElementById("preview")?.appendChild(sauceImg);
        }
    }
    //Entscheidung Waffel/Becher; entfernen der alten und spawnen der neuen Section
    let cone = document.getElementById("Cone");
    cone?.addEventListener("click", chooseCone);
    function chooseCone() {
        document.getElementById("welcome")?.setAttribute("id", "chooseVesselInvis");
        document.getElementById("flavorsInvis")?.setAttribute("id", "fakeID");
        localStorage.setItem("Vessel", "Cone");
        darstellungLaden();
    }
    let cup = document.getElementById("Cup");
    cup?.addEventListener("click", chooseCup);
    function chooseCup() {
        document.getElementById("welcome")?.setAttribute("id", "chooseVesselInvis");
        document.getElementById("flavorsInvis")?.setAttribute("id", "fakeID");
        localStorage.setItem("Vessel", "Cup");
        darstellungLaden();
    }
    //Flavors Indizes geben und eventListener adden
    Endabgabe.addFlavorList = document.querySelectorAll(".addFlavor");
    console.log(Endabgabe.addFlavorList);
    for (let index = 0; index < Endabgabe.addFlavorList.length; index++) {
        let addFlavor = Endabgabe.addFlavorList[index];
        addFlavor.setAttribute("flavorIndex", index.toString());
        addFlavor.addEventListener("click", addFlavorFunc);
    }
    function addFlavorFunc(_event) {
        counterF++;
        if (counterF == 3) {
            openSauce();
        }
        let target = _event.target;
        let flavorIndex = parseFloat(target.getAttribute("flavorIndex"));
        let flavorImg = document.createElement("img");
        flavorImg.setAttribute("src", "Bilder/Flavors/Flavor" + flavorIndex + ".png");
        flavorImg.setAttribute("alt", "Flavor" + flavorIndex);
        if (counterF == 1) {
            flavorImg.setAttribute("id", "Scoop1");
        }
        if (counterF == 2) {
            flavorImg.setAttribute("id", "Scoop2");
        }
        if (counterF == 3) {
            flavorImg.setAttribute("id", "Scoop3");
        }
        flavorImg.setAttribute("class", "Flavour");
        console.log(flavorImg);
        document.getElementById("preview").appendChild(flavorImg);
        /*iwas mit local storage kommt hier noch rein*/
        localStorage.setItem("Flavor" + counterF, flavorIndex.toString());
        if (counterF < 3) {
            localStorage.setItem("Flavor3", "null");
        }
        if (counterF < 2) {
            localStorage.setItem("Flavor2", "null");
        }
        localStorage.setItem("counter", counterF.toString());
    }
    //Soßen Indizes geben und eventListener adden
    const addSauceList = document.querySelectorAll(".addSauce");
    //console.log(addSauceList);
    for (let index = 0; index < addSauceList.length; index++) {
        let addSauce = addSauceList[index];
        addSauce.setAttribute("sauceIndex", index.toString());
        addSauce.addEventListener("click", addSauceFunc);
    }
    let counterS = 0;
    function addSauceFunc(_event) {
        counterS++;
        if (counterS == 1) {
            openToppings();
        }
        let target = _event.target;
        let sauceIndex = parseFloat(target.getAttribute("sauceIndex"));
        let sauceImg = document.createElement("img");
        sauceImg.setAttribute("src", "Bilder/sauces/DisplaySauces/Sauce" + sauceIndex + ".png");
        sauceImg.setAttribute("alt", "Sauce" + sauceIndex);
        if (counterF == 1) {
            sauceImg.setAttribute("id", "Sauce1F");
        }
        if (counterF == 2) {
            sauceImg.setAttribute("id", "Sauce2F");
        }
        if (counterF == 3) {
            sauceImg.setAttribute("id", "Sauce3F");
        }
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
        //out of stock --> //addTopping.addEventListener("click", addToppingFunc);
    }
    /* let counterT: number;
    function addToppingFunc(_event: Event): void {
        counterT++;

        if (counterT >= 1) {
            openOrder();
        }

        let target: HTMLElement = <HTMLElement>_event.target;
        let toppingIndex: number = parseFloat(target.getAttribute("toppingIndex")!);
        let toppingImg: HTMLElement = document.createElement("img");
        toppingImg.setAttribute("src", //hier Bild einfügen + toppingIndex);
        toppingImg.setAttribute("alt", "Topping" + toppingIndex);
        document.getElementById("preview")?.appendChild(toppingImg);
        //iwas mit local storage kommt hier noch rein
        localStorage.setItem("Topping", toppingIndex.toString());
    } */
    document.getElementById("newOrder")?.addEventListener("click", newOrder);
    function newOrder() {
        location.replace("Eisdiele.html" /* "https://simon-za.github.io/GIS-SoSe-2020/Endabgabe/Eisdiele.html" */);
        localStorage.clear();
    }
    //Weiterleitung zur nächsten Seite
    document.getElementById("nextSauce")?.addEventListener("click", openSauce);
    function openSauce() {
        location.replace("EisdieleSauce.html" /* "https://simon-za.github.io/GIS-SoSe-2020/Endabgabe/EisdieleSauce.html" */);
    }
    document.getElementById("nextToppings")?.addEventListener("click", openToppings);
    function openToppings() {
        location.replace("EisdieleToppings.html" /* "https://simon-za.github.io/GIS-SoSe-2020/Endabgabe/EisdieleToppings.html" */);
    }
    document.getElementById("nextOrder")?.addEventListener("click", openOrder);
    function openOrder() {
        location.replace("EisdieleOrder.html" /*  "https://simon-za.github.io/GIS-SoSe-2020/Endabgabe/EisdieleOrder.html" */);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Eisdiele.js.map