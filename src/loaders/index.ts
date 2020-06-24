import expressLoader from './express'
import Logger from './logger'
import config from "../config";

export default () => {
    expressLoader()
    Logger.info('✔️ Express loaded')

    Logger.info("")
    Logger.info("================================")
    Logger.info(`✔️ Server listening on port ${config.port}`)
    Logger.info("================================")

}
