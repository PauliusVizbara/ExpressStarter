import Logger from './logger'
import config from "../config";
import expressLoader from './express'
import webSocketServerLoader from "./webSocketServer";
import mongooseLoader from './mongoose'
import dependencyInjectorLoader from "./dependencyInjector";

export default async () => {
    const server = expressLoader()
    Logger.info('✔️ Express loaded')

    const wss = webSocketServerLoader(server)
    Logger.info('✔️ Web socket server loaded')

    const mongoConnection = await mongooseLoader()
    Logger.info('✔️ Database loaded')

    dependencyInjectorLoader(mongoConnection, Logger, wss)
    Logger.info('✔️ Dependencies injected')
}
