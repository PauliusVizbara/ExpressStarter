import express from 'express'
import bodyParser from 'body-parser';
import config from '../config/index'
import initRoutes from '../api/routes'
import * as http from 'http';

export default () => {
    const app = express();
    const server = http.createServer(app)


    initRoutes(app)

    app.use(bodyParser.json());

    server.listen(config.port, () => {

    });

    return app

}
