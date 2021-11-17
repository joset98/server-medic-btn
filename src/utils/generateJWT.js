const jwt = require('jsonwebtoken');

const tokenGenerator = () => {
    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
    return token;

};

module.export = tokenGenerator;