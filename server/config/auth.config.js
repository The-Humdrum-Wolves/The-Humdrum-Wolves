const configAuth = (app, data) => {
    let passport = require('passport');
    let { Strategy } = require('passport-local');
    
    passport.use(new Strategy(
        (username, password, done) => {
            
        }
    ));
}

module.exports = configAuth;