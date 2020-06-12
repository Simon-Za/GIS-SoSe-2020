"use strict";
var Aufgabe_07;
(function (Aufgabe_07) {
    ArtikelLaden("Artikel.json");
    async function ArtikelLaden(_url) {
        let response = await fetch(_url);
        Aufgabe_07.produkte = await response.json();
        Aufgabe_07.seiteAufbauen();
    }
})(Aufgabe_07 || (Aufgabe_07 = {}));
//# sourceMappingURL=interfaceUnSo.js.map