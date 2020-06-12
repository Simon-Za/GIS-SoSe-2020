namespace Aufgabe_07 {



    let zähler: number = 0;
    let spanZ: HTMLSpanElement = document.createElement("span");
    export let warenkorb: number = 0;

    let resetKat: HTMLAnchorElement = document.createElement("a");
    resetKat.setAttribute("href", "#");
    let resetKatH: HTMLHeadingElement = document.createElement("h3");
    resetKat.appendChild(resetKatH);
    resetKatH.innerHTML = "| show all";
    resetKat.setAttribute("id", "reset");
    document.getElementById("Iconcontainer")?.appendChild(resetKat);





    const produkteID: HTMLElement = document.getElementById("ProdukteID") as HTMLDivElement;


    let h20: HTMLHeadingElement = document.createElement("h2");
    h20.setAttribute("id", "oben");
    h20.innerHTML = "Verfügbar bis 26.06.2020 <br class='breakpoint'>(wird danach verbrannt)";

    let h21: HTMLHeadingElement = document.createElement("h2");
    h21.setAttribute("id", "mitte");
    h21.innerHTML = "Verfügbar bis 28.06.2020 <br class='breakpoint'>(wird danach in die Müllpresse geworfen)";

    let h22: HTMLHeadingElement = document.createElement("h2");
    h22.setAttribute("id", "unten");
    h22.innerHTML = "Verfügbar bis 01.07.2020 <br class='breakpoint'> (wird danach in die Gärten der Nachbarn gestellt)";


    produkteID.appendChild(h20);

    export function seiteAufbauen(): void {

        for (let index: number = 0; index < produkte.length; index++) {

            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "product");



            if (produkte[index].kategorie == 2 && produkte[index - 1].kategorie == 1) {

                produkteID.appendChild(h21);
            }
            if (produkte[index].kategorie == 3 && produkte[index - 1].kategorie == 2) {

                produkteID.appendChild(h22);
            }

            produkteID.appendChild(div);


            let img: HTMLImageElement = document.createElement("img");
            img.setAttribute("src", produkte[index].bild);
            img.setAttribute("alt", produkte[index].name);

            let pName: HTMLParagraphElement = document.createElement("p");

            let pPreis: HTMLParagraphElement = document.createElement("p");

            let pBeschreibung: HTMLParagraphElement = document.createElement("p");

            pName.innerHTML = produkte[index].name;

            let button: HTMLButtonElement = document.createElement("button");
            button.innerHTML = "Kaufen";
            button.setAttribute("id", "button");
            button.setAttribute("produktIndex", index.toString());

            button.addEventListener("click", addToCart);

            pPreis.innerHTML = produkte[index].preis + "€";

            pBeschreibung.innerHTML = produkte[index].beschreibung;

            div.appendChild(img);
            div.appendChild(pName);
            div.appendChild(button);
            div.appendChild(pPreis);
            div.appendChild(pBeschreibung);



            document.getElementById("1Jump")?.addEventListener("click", hideKats);
            document.getElementById("2Jump")?.addEventListener("click", hideKats);
            document.getElementById("3Jump")?.addEventListener("click", hideKats);
            document.getElementById("reset")?.addEventListener("click", showAllKats);


            function showAllKats(): void {
                document.getElementById("oben")?.removeAttribute("class");
                document.getElementById("mitte")?.removeAttribute("class");
                document.getElementById("unten")?.removeAttribute("class");
                div.classList.remove("invis");
            }

            function hideKats(_event: Event): void {
                let target: HTMLElement = <HTMLElement>_event.target;
                let obenMitteUnten: string = (target.getAttribute("id")!);
                if (obenMitteUnten == "1Jump") {
                    document.getElementById("oben")?.removeAttribute("class");
                    document.getElementById("mitte")?.classList.add("class", "invis");
                    document.getElementById("unten")?.classList.add("class", "invis");
                    if (produkte[index].kategorie == 2 || produkte[index].kategorie == 3) {
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
                    if (produkte[index].kategorie == 1 || produkte[index].kategorie == 3) {
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
                    if (produkte[index].kategorie == 1 || produkte[index].kategorie == 2) {
                        div.classList.add("class", "invis");
                    }
                    else {
                        div.classList.remove("invis");
                    }
                }
            }



        }
    }

    //let shoppinCart: Produkt[];

    function addToCart(_event: Event): void {
        zähler++;
        spanZ.innerHTML = zähler.toString();
        document.getElementById("icons")?.appendChild(spanZ);
        let target: HTMLElement = <HTMLElement>_event.target;
        let produktIndex: number = parseFloat(target.getAttribute("produktIndex")!);
        warenkorb += produkte[produktIndex].preis;
        
        localStorage.setItem("gesamtpreis", "" + warenkorb);

        let shoppinCart: Produkt[];
        localStorage.setItem("shoppinCart", "" + shoppinCart); //????


        console.log("Sie sind sich sicher, dass sie " + warenkorb + "€ für diesen Schrott zahlen wollen?");
    }

}