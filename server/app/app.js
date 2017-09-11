const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

    return Promise.resolve(app);
};

module.exports = { init };