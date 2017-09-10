const { Router } = require('express');
const { ObjectID } = require('mongodb');

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
    .get('/:id', (req, res) => {
        const id = req.params.id;
        console.log(new ObjectID(id));
        data.users.findById(new ObjectID(id))
            .then(user => res.json(user));
    });

    app.use('/users', router);
};

module.exports = { attachTo };