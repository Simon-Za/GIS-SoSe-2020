namespace Aufgabe_07 {
    export interface Produkt {
        bild: string;
        name: string;
        preis: number;
        beschreibung: string;
        kategorie: number;
    }
    ArtikelLaden("Artikel.json");

    export let produkte: Produkt[];
    async function ArtikelLaden(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        produkte = await response.json();
        seiteAufbauen(); 
    }
}