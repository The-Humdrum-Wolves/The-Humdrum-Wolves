const attachTo = (app, data) => {
    app.get('/', (req, res) => {
        res.send('ufff');
    });

    app.post('/users', (req, res) => {
        // TODO: Add validation
        // TODO: Move to separate controller
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName,
            age: req.body.age
        }

        data.users.create(user);

        res.send(`User ${user.username} created`);
    });
};

module.exports = { attachTo };