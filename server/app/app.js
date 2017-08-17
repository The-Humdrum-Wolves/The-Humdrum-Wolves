const express = require('express');

const init = (data) => {
    const app = express();

    app.get('/', (req, res) => {
        return res.send('Hello');
    });

    return Promise.resolve(app);
};

module.exports = { init };