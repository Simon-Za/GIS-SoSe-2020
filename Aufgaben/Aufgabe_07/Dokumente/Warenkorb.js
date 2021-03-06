"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    //Gesamtpreis anzeigen
    let gesamtPreis = document.createElement("p");
    if (localStorage.getItem("gesamtpreis")) {
        Aufgabe_07.warenkorb = parseFloat(localStorage.getItem("gesamtpreis"));
        gesamtPreis.innerHTML = "Gesamtpreis: " + localStorage.getItem("gesamtpreis") + "€";
        document.getElementById("Gesamtpreis")?.appendChild(gesamtPreis);
    }
    //Produkte generieren
    //local storage
    let CartArray = JSON.parse(localStorage.getItem("CartArray"));
    for (let index = 0; index < CartArray.length; index++) {
        if (CartArray[index] == null) {
            continue;
        }
        let div = document.createElement("div");
        div.setAttribute("class", "product");
        document.getElementById("ProdukteID")?.appendChild(div);
        let img = document.createElement("img");
        img.setAttribute("src", CartArray[index].bild);
        img.setAttribute("alt", CartArray[index].name);
        let pName = document.createElement("p");
        let pPreis = document.createElement("p");
        let pBeschreibung = document.createElement("p");
        pName.innerHTML = CartArray[index].name;
        let button = document.createElement("button");
        button.innerHTML = "remove from cart";
        button.setAttribute("id", "button");
        button.setAttribute("produktIndex", index.toString());
        button.addEventListener("click", removeFromCart);
        pPreis.innerHTML = CartArray[index].preis + "€";
        pBeschreibung.innerHTML = CartArray[index].beschreibung;
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(button);
        div.appendChild(pPreis);
        div.appendChild(pBeschreibung);
        function removeFromCart(_event) {
            let target = _event.target;
            let produktIndex = parseFloat(target.getAttribute("produktIndex"));
            Aufgabe_07.warenkorb -= CartArray[produktIndex].preis;
            gesamtPreis.innerHTML = "Gesamtpreis: " + Aufgabe_07.warenkorb + "€";
            delete CartArray[produktIndex];
            div.remove();
            localStorage.setItem("CartArray", JSON.stringify(CartArray));
            localStorage.setItem("gesamtpreis", "" + Aufgabe_07.warenkorb);
        }
    }
    // }
    //Warenkorb leeren
    let deleteKorb = document.createElement("a");
    deleteKorb.setAttribute("href", "#");
    let deleteKorbH = document.createElement("h3");
    deleteKorb.appendChild(deleteKorbH);
    deleteKorbH.innerHTML = "clear shopping cart";
    deleteKorbH.setAttribute("id", "delete");
    document.getElementById("clearCart")?.appendChild(deleteKorb);
    document.getElementById("delete")?.addEventListener("click", deleteLS);
    function deleteLS() {
        localStorage.clear();
        gesamtPreis.remove();
        document.getElementById("ProdukteID")?.remove();
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=Warenkorb.js.map