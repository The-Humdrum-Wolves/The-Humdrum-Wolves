const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        res.send('Routes work');
    });
};

module.exports = { attachTo };