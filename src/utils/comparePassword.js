const bcrypt = require('bcryptjs');

const compare = async (userPassword, requestPassword) =>{
    try {
        return await bcrypt.compare(requestPassword, userPassword);
    } catch (error) {
        console.log('password invalid')
        return false;
    }

}

module.exports = compare;