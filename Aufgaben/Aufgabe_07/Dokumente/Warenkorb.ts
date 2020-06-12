namespace Aufgabe_07 {

    //Gesamtpreis anzeigen
    let gesamtPreis: HTMLParagraphElement = document.createElement("p");
    gesamtPreis.innerHTML = "Gesamtpreis: " + localStorage.getItem("gesamtpreis")! + "€";
    document.getElementById("Gesamtpreis")?.appendChild(gesamtPreis);

    //Produkte generieren
     //local storage
    (<HTMLElement>document.getElementById("ProdukteIDCart")).innerHTML = localStorage.getItem("shoppinCart")!;
    
    //Warenkorb leeren
    let deleteKorb: HTMLAnchorElement = document.createElement("a");
    deleteKorb.setAttribute("href", "#");
    let deleteKorbH: HTMLHeadingElement = document.createElement("h3");
    deleteKorb.appendChild(deleteKorbH);
    deleteKorbH.innerHTML = "clear shopping cart";
    deleteKorb.setAttribute("id", "delete");
    document.getElementById("clearCart")?.appendChild(deleteKorb);

    document.getElementById("delete")?.addEventListener("click", deleteLS);
    function deleteLS(): void {
        localStorage.clear();
    }

}