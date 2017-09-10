const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();

    router.post('/', (req, res) => {
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
    })
    .get('/:username', (req, res) => {
        const username = req.params.username;

        data.users.findByUsername(username)
            .then(user => res.send(user));
    });

    app.use('/users', router);
};

module.exports = { attachTo };