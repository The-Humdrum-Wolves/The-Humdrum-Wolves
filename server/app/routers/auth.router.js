const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();

    router.post('/sign-in', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            req.logIn(user, (err) => {
                if (err) { 
                    return next(err); 
                }
                req.user = user;
                console.log(2);
                console.log(req.user);
                return res.send('Signed in');
            });
        })(req, res, next);

        //res.send("Signed in");
    })
    .get('/logout', (req, res) => {
        console.log('from logout');
        console.log(req.user);
        req.logout();
        res.send('Logged out');
    });

    app.use('/auth', router);
};

module.exports = { attachTo };