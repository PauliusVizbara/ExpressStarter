import 'reflect-metadata'; // We need this in order to use @Decorators
import {Container} from 'typedi';
import config from './config'
import loadApp from './loaders'
import {WSSController} from "./api/websockets/wssController";
import winston from "winston";

const startServer = async () => {
    await loadApp()
    new WSSController()
}

startServer().then(() => {
    const logger : winston.Logger = Container.get('logger')
    logger.info("================================")
    logger.info(`✔️ Server listening on port ${config.port}`)
    logger.info("================================")
})
