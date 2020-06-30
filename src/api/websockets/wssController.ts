import {Container} from "typedi";

export class WSSController{
    constructor() {
        const {instance : wss, connections} : any  = Container.get('wss')
        wss.on('connection', (ws: any) => {

            connections.push(ws)
            ws.on('message', (message) => this.onMessage(ws,message));
        })
    }

    onMessage = (ws, message) => {
        ws.send(`You just sent me a ${message}`)
    }
}
