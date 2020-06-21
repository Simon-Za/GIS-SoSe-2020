namespace A08Server {
    let formData: FormData = new FormData(document.forms[0]);
    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    //formData.append(serverDaten);
    async function serverDaten(): Promise<void> {
        let url: string = "https://gissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        await fetch(url);
    }
}