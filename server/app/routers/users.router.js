const attachTo = (app, data) => {
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

        res.send(`User ${user.username} created successfully`);
    });

    app.get('/users/:username', (req, res) => {
        const username = req.params.username;

        data.users.findByUsername(username)
            .then(user => res.send(user));
    });
};

module.exports = { attachTo };