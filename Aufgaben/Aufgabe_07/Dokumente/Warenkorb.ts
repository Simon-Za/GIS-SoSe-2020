namespace Aufgabe_07 {

    //Gesamtpreis anzeigen
    let gesamtPreis: HTMLParagraphElement = document.createElement("p");
    if (localStorage.getItem("gesamtpreis")) {
        warenkorb = parseFloat(localStorage.getItem("gesamtpreis")!);
        gesamtPreis.innerHTML = "Gesamtpreis: " + localStorage.getItem("gesamtpreis")! + "€";
        document.getElementById("Gesamtpreis")?.appendChild(gesamtPreis);
    }

    //Produkte generieren
    //local storage
    
        let CartArray: Array<Produkt> = JSON.parse(localStorage.getItem("CartArray")!);

        for (let index: number = 0; index < CartArray.length; index++) {

            if(CartArray[index] == null){
                continue;
            }
             
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "product");
            document.getElementById("ProdukteID")?.appendChild(div);

            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", CartArray[index].bild);
            img.setAttribute("alt", CartArray[index].name);

            let pName: HTMLParagraphElement = document.createElement("p");

            let pPreis: HTMLParagraphElement = document.createElement("p");

            let pBeschreibung: HTMLParagraphElement = document.createElement("p");

            pName.innerHTML = CartArray[index].name;

            let button: HTMLButtonElement = document.createElement("button");
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
            

            function removeFromCart(_event: Event): void {
                let target: HTMLElement = <HTMLElement>_event.target;
                let produktIndex: number = parseFloat(target.getAttribute("produktIndex")!);
                warenkorb -= CartArray[produktIndex].preis;
                gesamtPreis.innerHTML = "Gesamtpreis: " + warenkorb + "€";
                delete CartArray[produktIndex];
                div.remove();
                localStorage.setItem("CartArray", JSON.stringify(CartArray));
                localStorage.setItem("gesamtpreis", "" + warenkorb);
            }
        }
   // }

    //Warenkorb leeren
    let deleteKorb: HTMLAnchorElement = document.createElement("a");
    deleteKorb.setAttribute("href", "#");
    let deleteKorbH: HTMLHeadingElement = document.createElement("h3");
    deleteKorb.appendChild(deleteKorbH);
    deleteKorbH.innerHTML = "clear shopping cart";
    deleteKorbH.setAttribute("id", "delete");
    document.getElementById("clearCart")?.appendChild(deleteKorb);

    document.getElementById("delete")?.addEventListener("click", deleteLS);
    function deleteLS(): void {
        localStorage.clear();
        gesamtPreis.remove();
        document.getElementById("ProdukteID")?.remove();   
    }

}