"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http"); //importieren von http modul, das für Serverentwicklunbg benötigt wird
const Url = require("url");
//import { url } from "inspector";
var A09Server;
(function (A09Server) {
    console.log("Starting server"); //Ausgabe, dass Server startet 
    let port = Number(process.env.PORT); //portnummer wird einer Variablen zugewisen
    if (!port) //Es wird getestet ob ein Port existiert und wenn ja, dann wird ihm eine Portnummer zugewiesen    
        port = 8100;
    let server = Http.createServer(); //ein server wird erstellt
    server.addListener("request", handleRequest); //der Server bekommt einen Requesthandler
    server.addListener("listening", handleListen); //und einen Listenhandler
    server.listen(port); //Der server wird auf den port gesetzt der oben bestimmt wurde
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Bei einer Request wird etwas in der Konsole ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Ein Header wird aufgebaut
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + " : " + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log("habibi nohomo");
                console.log(jsonString);
            }
        }
        console.log("beep boop");
        _response.write("if u read this u a fkn nerd"); //Die URL wird auf die Seite geschrieben
        _response.end(); //die response endet
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map