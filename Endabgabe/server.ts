import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { ParsedUrlQuery } from "querystring";

namespace Endabgabe {

    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    let port: number = Number(process.env.PORT); 
    if (!port)           
        port = 8101;

    let databaseUrl: string = "mongodb+srv://newUser:TcnBxD7T2dq5gzbj@buster-the-cluster.abnmq.mongodb.net/Endabgabe?retryWrites=true&w=majority";

    startServer(port);

    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        console.log("Starting server"); 

        let server: Http.Server = Http.createServer();  
        server.addListener("request", handleRequest);   
        server.addListener("listening", handleListen);   
        server.listen(_port);                       
    }

    export async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Endabgabe").collection("Orders");
        console.log("Database connection", orders != undefined);
    }

    function handleListen(): void {          
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log(_request.url);        

        _response.setHeader("content-type", "text/html; charset=utf-8");    
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/sendData") {
                storeOrder(url.query);
            }

            if (url.pathname == "/getData") {

                _response.write(JSON.stringify(await orders.find().toArray()));
                console.log(JSON.stringify(await orders.find().toArray()));
            }

            // Source: https://github.com/Plagiatus/GIS_SoSe2020/blob/master/Aufgabe11/Server/database.ts#L29
            if (url.pathname == "/deleteItem") {
                let query: ParsedUrlQuery = url.query;
                let id: string = <string>query["_id"];
                let mongoId: Mongo.ObjectID = new Mongo.ObjectID(id);
                _response.write(JSON.stringify(await orders.deleteOne({ "_id": mongoId })));
            }

            if (url.pathname == "/acceptOrder") {
                let query: ParsedUrlQuery = url.query;
                let id: string = <string>query["_id"];
                let mongoId: Mongo.ObjectID = new Mongo.ObjectID(id);
                orders.update({ "_id": mongoId }, {$set: { "Comment": "accepted" }});
            }


        }
        console.log("Requests can be handled");          
        _response.end();                                 
    }

    function storeOrder(_order: Order): void {
        orders.insertOne(_order);
    }
}
