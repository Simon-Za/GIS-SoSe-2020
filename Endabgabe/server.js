"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8101;
    let databaseUrl = "mongodb+srv://newUser:TcnBxD7T2dq5gzbj@buster-the-cluster.abnmq.mongodb.net/Endabgabe?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Endabgabe").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    Endabgabe.connectToDatabase = connectToDatabase;
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/sendData") {
                storeOrder(url.query);
            }
            if (url.pathname == "/getData") {
                _response.write(JSON.stringify(await orders.find().toArray()));
                console.log(JSON.stringify(await orders.find().toArray()));
            }
            // Source: https://github.com/Plagiatus/GIS_SoSe2020/blob/master/Aufgabe11/Server/database.ts#L29
            if (url.pathname == "/deleteItem") {
                let query = url.query;
                let id = query["_id"];
                let mongoId = new Mongo.ObjectID(id);
                _response.write(JSON.stringify(await orders.deleteOne({ "_id": mongoId })));
            }
            if (url.pathname == "/acceptOrder") {
                let query = url.query;
                let id = query["_id"];
                let mongoId = new Mongo.ObjectID(id);
                orders.update({ "_id": mongoId }, { $set: { "Comment": "accepted" } });
            }
        }
        console.log("Requests can be handled");
        _response.end();
    }
    function storeOrder(_order) {
        orders.insertOne(_order);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=server.js.map