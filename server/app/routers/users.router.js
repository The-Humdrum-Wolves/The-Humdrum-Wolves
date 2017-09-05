const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        res.send('ufff');
    });
};

module.exports = { attachTo };