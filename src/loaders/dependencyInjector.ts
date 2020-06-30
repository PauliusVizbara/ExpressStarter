import {Container} from 'typedi';
import models from 'models';

export default (dbConnection, logger, wss) => {
    Container.set('logger', logger)
    Container.set('db', dbConnection)
    models.forEach(model => {
        Container.set(model.name, model.model)
    })

    Container.set('wss', {instance: wss, connections: {}})
}
