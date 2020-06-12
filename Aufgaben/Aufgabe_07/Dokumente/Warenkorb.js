"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    //Gesamtpreis anzeigen
    let gesamtPreis = document.createElement("p");
    gesamtPreis.innerHTML = "Gesamtpreis: " + localStorage.getItem("gesamtpreis") + "€";
    document.getElementById("Gesamtpreis")?.appendChild(gesamtPreis);
    //Produkte generieren
    //local storage
    document.getElementById("ProdukteIDCart").innerHTML = localStorage.getItem("shoppinCart");
    //Warenkorb leeren
    let deleteKorb = document.createElement("a");
    deleteKorb.setAttribute("href", "#");
    let deleteKorbH = document.createElement("h3");
    deleteKorb.appendChild(deleteKorbH);
    deleteKorbH.innerHTML = "clear shopping cart";
    deleteKorb.setAttribute("id", "delete");
    document.getElementById("clearCart")?.appendChild(deleteKorb);
    document.getElementById("delete")?.addEventListener("click", deleteLS);
    function deleteLS() {
        localStorage.clear();
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=Warenkorb.js.map