const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        res.send('./../../../client/src/app/components/home/home.component.html');
    });
};

module.exports = { attachTo };