import * as Http from "http"; //importieren von http modul, das für Serverentwicklunbg benötigt wird

 export namespace A08Server {
  console.log("Starting server"); //Ausgabe, dass Server startet 
  let port: number = Number(process.env.PORT); //portnummer wird einer Variablen zugewisen
  if (!port)            //Es wird getestet ob ein Port existiert und wenn ja, dann bekommt er die nr 8100
    port = 8100;

  let server: Http.Server = Http.createServer();  //ein server wird erstellt
  server.addListener("request", handleRequest);   //der Server bekommt einen Requesthandler
  server.addListener("listening", handleListen);   //und einen Listenhandler
  server.listen(port);                            //Der server wird auf den port gesetzt der oben bestimmt wurde

  function handleListen(): void {             //Die Funktion handleListen signalisiert, dass sie am listenen ist
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  
    console.log("I hear voices!");          //Bei einer Request wird etwas in der Konsole ausgegeben

    _response.setHeader("content-type", "text/html; charset=utf-8");    //Ein Header wird aufgebaut
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);              //Die Request wird in die URL geschrieben

    console.log(_request.url);                  // und in der console ausgegeben

    _response.end();                           //die response endet
  }
}