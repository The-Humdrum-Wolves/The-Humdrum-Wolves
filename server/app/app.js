const express = require('express');
const bodyParser = require('body-parser');

const init = (data) => {
    const app = express();

    // Config application
    app.use(bodyParser.json());
    require('../config/auth.config')(app, data);

    // add routers
    require('./routers').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };