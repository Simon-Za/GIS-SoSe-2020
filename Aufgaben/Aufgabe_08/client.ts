namespace A08Server {

    document.getElementById("button")!.addEventListener("click", serverDaten);

    async function serverDaten(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        console.log((await fetch(url)).url);
    }
}