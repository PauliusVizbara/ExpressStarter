import {Container} from "typedi";
import WebSocket from "ws";

export class WSSController{
    constructor() {
        const {instance : wss, connections} : any  = Container.get('wss')
        wss.on('connection', (ws: WebSocket) => {
            ws.on('message', (message) => this.onMessage(ws,message));
        })
    }

    onMessage = (ws, message) => {
        ws.send(`Server received: ${message}`)
    }
}
