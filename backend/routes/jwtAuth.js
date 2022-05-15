const jwt = require('jsonwebtoken');
const { Op } = require('../Sequelize/sequelize').Sequelize;

//Middleware to verify the jwt token
const jwtAuth = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const data = jwt.verify(token, "online");

        req.token = data;
        next();
    } catch (e) {
        console.log(e.message)
        res.status(401).json({ error: 'Token is not valid' });
    }

};


module.exports = jwtAuth;