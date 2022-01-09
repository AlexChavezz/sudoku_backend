const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api/data';
        // -> middlewares
        this.middlewares();
        
        // -> routes
        this.routes();
    }
    middlewares() {
        this.app.use( express.json());
        this.app.use( cors() );
    }
    routes(){
        this.app.use( this.path, require('../routes/data.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        })
    }
}

module.exports = Server;