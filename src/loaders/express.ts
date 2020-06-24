import express, {Router} from 'express'
import config from '../config/index'
import initRoutes from '../api/routes'
import * as http from 'http';

export default () => {
    const app = express();
    const server = http.createServer(app)


    initRoutes(app)

    server.listen(config.port, () => {

    });

}
