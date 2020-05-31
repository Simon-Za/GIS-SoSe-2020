namespace Aufgabe_05 {

    interface Produkt {
        bild: string;
        name: string;
        preis: number;
        beschreibung: string;
        kategorie: number;
    }

    let artikel1: Produkt = { bild: "IMG_20200523_190757.jpg", name: "Ehrenmann Zaubererhut", preis: 12, beschreibung: "Lässt den Träger Cringelevel errreichen, <br> die ohne eine Form von Magie<br class='breakpoint'> nicht möglich wären.", kategorie: 1 };
    let artikel2: Produkt = { bild: "IMG_20200523_191106.jpg", name: "Hanteln", preis: 12, beschreibung: "6x 12kg + 12x 1kg + 3 Stangen a 1kg", kategorie: 1 };
    let artikel3: Produkt = { bild: "IMG_20200523_191432.jpg", name: "chinesische Cartoonfiguren", preis: 3, beschreibung: "Was soll man dazu noch sagen", kategorie: 1 };
    let artikel4: Produkt = { bild: "IMG_20200523_191610.jpg", name: "Ein Einhornhorn", preis: 12, beschreibung: "Magisches Item, zu gebrauchen<br class='breakpoint'> für Zaubertrankbrauerei <br> oder andere Fetische", kategorie: 1 };
    let artikel5: Produkt = { bild: "IMG_20200523_191701.jpg", name: "lautes Musikgerät", preis: 2, beschreibung: "Nur die Hülle zu verkaufen,<br> die Elektronik im Inneren<br class='breakpoint'>wurde bereits gelootet", kategorie: 2 };
    let artikel6: Produkt = { bild: "IMG_20200523_192006.jpg", name: "SLS AMG", preis: 94.000, beschreibung: "Schönes Auto, guter Zustand", kategorie: 2 };
    let artikel7: Produkt = { bild: "IMG_20200523_192307.jpg", name: "Goethe Sekundärliteratur", preis: 8, beschreibung: "sehr alt und nicht nur literarisch,<br> sondern sicher auch historisch wertvoll<br>795 Seiten", kategorie: 2 };
    let artikel8: Produkt = { bild: "IMG_20200523_192643.jpg", name: "Elektronik", preis: 2, beschreibung: "keine Ahnung was das sein soll", kategorie: 2 };
    let artikel9: Produkt = { bild: "IMG_20200523_192939.jpg", name: "bunte Vogelhalskette", preis: 1, beschreibung: "Sieht hübsch aus", kategorie: 3 };
    let artikel10: Produkt = { bild: "IMG_20200523_193109.jpg", name: "Überraschungstüte", preis: 25, beschreibung: "Zufällige Produkte im Wert von 30€", kategorie: 3 };
    let artikel11: Produkt = { bild: "IMG_20200523_192819_Childproof.jpg", name: "Italienischer Wein", preis: 6, beschreibung: "Vini Nostalgici<br>75cl; 11,5%vol", kategorie: 3 };
    let artikel12: Produkt = { bild: "IMG_20200523_193257.jpg", name: "'Get tf out of my room you little shit'", preis: 0, beschreibung: "Ich komme fürs Erste nicht mehr <br class='breakpoint'> an neue Produkte ran", kategorie: 3 };

    let produkte: Produkt[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];


    const produkteID: HTMLElement = document.getElementById("ProdukteID") as HTMLDivElement;


    let h20: HTMLHeadingElement = document.createElement("h2");
    h20.setAttribute("id", "oben");
    h20.innerHTML = "Verfügbar bis 26.06.2020 <br class='breakpoint'>(wird danach verbrannt)";

    let h21: HTMLHeadingElement = document.createElement("h2");
    h21.setAttribute("id", "mitte");
    h21.innerHTML = "Verfügbar bis 28.06.2020 <br class='breakpoint'>(wird danach in die Müllpresse geworfen)";

    let h22: HTMLHeadingElement = document.createElement("h2");
    h22.setAttribute("id", "oben");
    h22.innerHTML = "Verfügbar bis 01.07.2020 <br class='breakpoint'> (wird danach in die Gärten der Nachbarn gestellt)";





    for (let index: number = 0; index < produkte.length; index++) {




        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "product");
        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("src", produkte[index].bild);
        img.setAttribute("alt", produkte[index].name);
        let pName: HTMLParagraphElement = document.createElement("p");
        let pPreis: HTMLParagraphElement = document.createElement("p");
        let pBeschreibung: HTMLParagraphElement = document.createElement("p");
        pName.innerHTML = produkte[index].name;
        let button: HTMLButtonElement = document.createElement("button");
        button.innerHTML = "Kaufen";
        pPreis.innerHTML = produkte[index].preis + "€";
        pBeschreibung.innerHTML = produkte[index].beschreibung;
        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(button);
        div.appendChild(pPreis);
        div.appendChild(pBeschreibung);


        if (index + 1 < produkte.length) {

            if (produkte[index].kategorie == 1) {
                if (produkte[index + 1].kategorie > produkte[index].kategorie) {
                    produkteID.appendChild(h21);
                }
                produkteID.appendChild(div);
            }
            if (produkte[index].kategorie == 2) {
                if (produkte[index + 1].kategorie > produkte[index].kategorie) {
                    produkteID.appendChild(h22);
                }
                produkteID.appendChild(div);
            }
        }
    }
}