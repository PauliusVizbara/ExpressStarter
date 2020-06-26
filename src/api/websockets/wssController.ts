import {Container} from "typedi";

export class WSSController{
    constructor() {
        const wssServer : any = Container.get('wss')
        wssServer.on('connection', (ws: any) => {
            ws.on('message', (message) => this.onMessage(ws,message));
        })
    }

    onMessage = (ws, message) => {
        ws.send(`You just sent me a ${message}`)
    }
}
