const express = require('express');

const init = (data) => {
    const app = express();

    // TODO: Config application
    require('../config/auth.config')(app, data);

    // add routers
    require('./routers').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };