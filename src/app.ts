import 'reflect-metadata'; // We need this in order to use @Decorators

import loadApp from './loaders'
import {WSSController} from "./api/websockets/wssController";

const startServer = async () => {
    await loadApp()
    new WSSController()
}

startServer()
