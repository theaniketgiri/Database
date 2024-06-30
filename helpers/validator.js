const {check} = require('express-validator');

exports.registerValidator = () => [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({min: 6})
]; 