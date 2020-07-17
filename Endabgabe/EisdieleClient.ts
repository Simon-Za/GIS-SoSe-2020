namespace Endabgabe {

    document.getElementById("servershit")?.addEventListener("click", sendData);

    let counter: number = parseInt(localStorage.getItem("counter")!);

    async function sendData(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/sendData?" + query.toString() + "&Vessel=" + localStorage.getItem("Vessel");

        for (let i: number = 1; i <= counter; i++) {
            url += "&Flavor" + i + "=" + localStorage.getItem("Flavor" + i);  
        }
        
        url += "&Sauce" + "=" + localStorage.getItem("Sauce");
        url += "&Topping" + "=" + localStorage.getItem("Topping");
        console.log(url);
        await fetch(url);

        //let response: Response = await fetch(url);
        //let responseText: string = await response.text();
 
    }
}