const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UserData extends BaseData {
    constructor(db) {
        super(db, User);
    }

    findByUsername(username) {
        const userToLower = username.toLowerCase();
        return this.collection
            .findOne({ username });
    }

    checkPassword(username, password) {
        return this.collection
            .findOne({ username })
            .then((user) => {
                if(!user) {
                    throw new Error('Invalid user');
                }
                if(user.password === password) {
                    throw new Error('Invalid password');
                }

                return true;
            })
    }

    _isModelValid(model) {
        // TODO: Add user validation
        return typeof model !== 'undefined' &&
            typeof model.email === 'string' &&
            typeof model.username === 'string' &&
            typeof model.password === 'string' &&
            model.username.length > 3;
    }
}

module.exports = UserData;
