import { Container } from 'typedi';
import models from 'models';

export default (dbConnection) => {
    Container.set('db', dbConnection)
    models.forEach(model => {
        Container.set(model.name, model.model)
    })

}
