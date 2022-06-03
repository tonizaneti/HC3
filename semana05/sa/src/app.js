// primeiro configurar  express 
// npm i express
// npm i dotenv
// npm i cors

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
class App{
    constructor (){
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(cors());
        this.server(express.json());

    }
    routes()
    {
        this.server.use()

    }

}

export default new App().server;