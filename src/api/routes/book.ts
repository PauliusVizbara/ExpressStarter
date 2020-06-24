import {Router} from "express";
const route = Router();

route.get('/', (req, res) => {
    return res.json({ waa: "Grimgore" }).status(200);
});

route.get('/:id', (req, res) => {
    return res.json({ waa: req.params.id }).status(200);
});

export default route

