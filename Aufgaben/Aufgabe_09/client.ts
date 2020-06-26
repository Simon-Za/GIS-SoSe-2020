namespace A09Server {

    document.getElementById("button1")!.addEventListener("click", gibResponse);
    document.getElementById("button2")!.addEventListener("click", gibResponseJson);


    async function gibResponse(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/html?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let tekscht: HTMLElement = document.createElement("p");
        tekscht.innerHTML = responseText;
        document.body.appendChild(tekscht);
    }

    async function gibResponseJson(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/json?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        
        //await response.text();
        
        //let jsonString: string = JSON.stringify(url);
        //response.write(jsonString);
        console.log((responseText));
    }
}