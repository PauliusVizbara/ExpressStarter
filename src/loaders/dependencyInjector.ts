import {Container} from 'typedi';
import models from 'models';

export default (dbConnection, wss) => {
    Container.set('db', dbConnection)
    models.forEach(model => {
        Container.set(model.name, model.model)
    })



    Container.set('wss', wss)
}
