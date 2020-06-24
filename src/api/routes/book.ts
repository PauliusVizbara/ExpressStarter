import {Router} from "express";
import {Container} from 'typedi';
import {BookService} from "services";
import { IBookDTO } from "interfaces";

const route = Router();

route.get('/', async (req, res) => {

});

route.get('/:id', (req, res) => {
    return res.json({waa: req.params.id}).status(200)
});

route.post('/', async (req, res) => {
    const bookServiceInstance = Container.get(BookService)
    const response = await bookServiceInstance.insertBook(req.body as IBookDTO)
    return res.json(response)
})

export default route

