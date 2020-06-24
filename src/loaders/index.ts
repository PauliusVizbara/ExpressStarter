import Logger from './logger'
import config from "../config";
import expressLoader from './express'
import mongooseLoader from './mongoose'
import dependencyInjectorLoader from "./dependencyInjector";

export default async () => {
    const app = expressLoader()
    Logger.info('✔️ Express loaded')

    const mongoConnection = await mongooseLoader()
    Logger.info('✔️ Database loaded')

    dependencyInjectorLoader(mongoConnection)
    Logger.info('✔️ Dependencies injected')

    Logger.info("================================")
    Logger.info(`✔️ Server listening on port ${config.port}`)
    Logger.info("================================")

}
