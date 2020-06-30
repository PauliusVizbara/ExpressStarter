import {Container} from "typedi";
import { v4 as uuid } from 'uuid';
import WebSocket from "ws";

export class WSSController{
    constructor() {
        const {instance : wss, connections} : any  = Container.get('wss')
        wss.on('connection', (ws: WebSocket) => {
            const wsId = uuid()
            connections[wsId] = ws
            ws.on('message', (message) => this.onMessage(ws,message))

            ws.send(JSON.stringify({id: wsId}))
        })
    }

    onMessage = (ws, message) => {
        ws.send(`Server received: ${message}`)
    }
}
