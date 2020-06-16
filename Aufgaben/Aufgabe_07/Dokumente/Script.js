"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    if (performance.navigation.type == 1) {
        localStorage.clear();
    }
    let zähler = 0;
    let spanZ = document.createElement("span");
    Aufgabe_07.warenkorb = 0;
    let resetKat = document.createElement("a");
    resetKat.setAttribute("href", "#");
    let resetKatH = document.createElement("h3");
    resetKat.appendChild(resetKatH);
    resetKatH.innerHTML = "| show all";
    resetKat.setAttribute("id", "reset");
    document.getElementById("Iconcontainer")?.appendChild(resetKat);
    //Cart Array erstellen 
    let shoppinCart;
    const produkteID = document.getElementById("ProdukteID");
    let h20 = document.createElement("h2");
    h20.setAttribute("id", "oben");
    h20.innerHTML = "Verfügbar bis 26.06.2020 <br class='breakpoint'>(wird danach verbrannt)";
    let h21 = document.createElement("h2");
    h21.setAttribute("id", "mitte");
    h21.innerHTML = "Verfügbar bis 28.06.2020 <br class='breakpoint'>(wird danach in die Müllpresse geworfen)";
    let h22 = document.createElement("h2");
    h22.setAttribute("id", "unten");
    h22.innerHTML = "Verfügbar bis 01.07.2020 <br class='breakpoint'> (wird danach in die Gärten der Nachbarn gestellt)";
    produkteID.appendChild(h20);
    function seiteAufbauen() {
        for (let index = 0; index < Aufgabe_07.produkte.length; index++) {
            let div = document.createElement("div");
            div.setAttribute("class", "product");
            if (Aufgabe_07.produkte[index].kategorie == 2 && Aufgabe_07.produkte[index - 1].kategorie == 1) {
                produkteID.appendChild(h21);
            }
            if (Aufgabe_07.produkte[index].kategorie == 3 && Aufgabe_07.produkte[index - 1].kategorie == 2) {
                produkteID.appendChild(h22);
            }
            produkteID.appendChild(div);
            let img = document.createElement("img");
            img.setAttribute("src", Aufgabe_07.produkte[index].bild);
            img.setAttribute("alt", Aufgabe_07.produkte[index].name);
            let pName = document.createElement("p");
            let pPreis = document.createElement("p");
            let pBeschreibung = document.createElement("p");
            pName.innerHTML = Aufgabe_07.produkte[index].name;
            let button = document.createElement("button");
            button.innerHTML = "Kaufen";
            button.setAttribute("id", "button");
            button.setAttribute("produktIndex", index.toString());
            button.addEventListener("click", addToCart);
            pPreis.innerHTML = Aufgabe_07.produkte[index].preis + "€";
            pBeschreibung.innerHTML = Aufgabe_07.produkte[index].beschreibung;
            div.appendChild(img);
            div.appendChild(pName);
            div.appendChild(button);
            div.appendChild(pPreis);
            div.appendChild(pBeschreibung);
            document.getElementById("1Jump")?.addEventListener("click", hideKats);
            document.getElementById("2Jump")?.addEventListener("click", hideKats);
            document.getElementById("3Jump")?.addEventListener("click", hideKats);
            document.getElementById("reset")?.addEventListener("click", showAllKats);
            function showAllKats() {
                document.getElementById("oben")?.removeAttribute("class");
                document.getElementById("mitte")?.removeAttribute("class");
                document.getElementById("unten")?.removeAttribute("class");
                div.classList.remove("invis");
            }
            function hideKats(_event) {
                let target = _event.target;
                let obenMitteUnten = (target.getAttribute("id"));
                if (obenMitteUnten == "1Jump") {
                    document.getElementById("oben")?.removeAttribute("class");
                    document.getElementById("mitte")?.classList.add("class", "invis");
                    document.getElementById("unten")?.classList.add("class", "invis");
                    if (Aufgabe_07.produkte[index].kategorie == 2 || Aufgabe_07.produkte[index].kategorie == 3) {
                        div.classList.add("class", "invis");
                    }
                    else {
                        div.classList.remove("invis");
                    }
                }
                if (obenMitteUnten == "2Jump") {
                    document.getElementById("mitte")?.removeAttribute("class");
                    document.getElementById("oben")?.classList.add("class", "invis");
                    document.getElementById("unten")?.classList.add("class", "invis");
                    if (Aufgabe_07.produkte[index].kategorie == 1 || Aufgabe_07.produkte[index].kategorie == 3) {
                        div.classList.add("class", "invis");
                    }
                    else {
                        div.classList.remove("invis");
                    }
                }
                if (obenMitteUnten == "3Jump") {
                    document.getElementById("unten")?.removeAttribute("class");
                    document.getElementById("oben")?.classList.add("class", "invis");
                    document.getElementById("mitte")?.classList.add("class", "invis");
                    if (Aufgabe_07.produkte[index].kategorie == 1 || Aufgabe_07.produkte[index].kategorie == 2) {
                        div.classList.add("class", "invis");
                    }
                    else {
                        div.classList.remove("invis");
                    }
                }
            }
        }
    }
    Aufgabe_07.seiteAufbauen = seiteAufbauen;
    function addToCart(_event) {
        zähler++;
        spanZ.innerHTML = zähler.toString();
        document.getElementById("icons")?.appendChild(spanZ);
        let target = _event.target;
        let produktIndex = parseFloat(target.getAttribute("produktIndex"));
        if (localStorage.getItem("gesamtpreis")) {
            Aufgabe_07.warenkorb = parseFloat(localStorage.getItem("gesamtpreis"));
        }
        Aufgabe_07.warenkorb += Aufgabe_07.produkte[produktIndex].preis;
        shoppinCart = JSON.parse(localStorage.getItem("CartArray"));
        if (!shoppinCart) {
            shoppinCart = [Aufgabe_07.produkte[produktIndex]];
        }
        else
            shoppinCart.push(Aufgabe_07.produkte[produktIndex]);
        localStorage.setItem("CartArray", JSON.stringify(shoppinCart));
        localStorage.setItem("gesamtpreis", "" + Aufgabe_07.warenkorb);
        console.log("Sie sind sich sicher, dass sie " + Aufgabe_07.warenkorb + "€ für diesen Schrott zahlen wollen?");
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=Script.js.map