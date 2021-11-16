const jwt = require('jsonwebtoken');
const {getUserByID} = require('../models/User');

module.exports = async (req, res, next) => {
    const token = req.header('auth-token');
    console.log('verifying token...')
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
        const userData = await getUserByID(verified._id);
        const {password, ...userRest} = userData;
        req.user = {...verified,...userRest};
        console.log(userRest, verified)
        next();
    } catch (error) {
        res.status(400).send('invalid token');        
    }
};