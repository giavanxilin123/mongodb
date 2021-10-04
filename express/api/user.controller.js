import { eventEmitter } from '../commons';

const userSerivce = require('../service/userSerivce');

export default class userController {
    constructor() {}

    callHelloWorld(req, res) {
        res.send('Hello World !!!');
    }

    async create(req, res) {
    }

    async search(req, res) {
        const { q } = req.query;
        userSerivce.query(q, (err, obj) => {
            res.status(200).send({
                status: "200",
                response: obj
            });
        })
    }

    async getById(req, res) {
        const { id } = req.query;
        userSerivce.findById(id, (err, obj) => {
            res.status(200).send({
                status: "200",
                response: obj
            });
        })
    }
}