const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        res.send('ufff');
    });

    app.post('/users', (req, res) => {
        console.log(req.body);
    });
};

module.exports = { attachTo };