const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const init = (data) => {
    const app = express();

    // Config application
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static(__dirname + '/dist'));
    
    require('../config/auth.config')(app, data);

    // add routers
    require('./routers').attachTo(app, data);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    });

    return Promise.resolve(app);
};

module.exports = { init };