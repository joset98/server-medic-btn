const bcrypt = require('bcryptjs');

const hashing = async (password) =>{
    try {
        const hashedPassword = bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.log('error to create hash password')
        return null;
    }

}

const compare = async (userPassword, requestPassword) =>{
    try {
        return await bcrypt.compare(requestPassword, userPassword);
    } catch (error) {
        console.log('password invalid')
        return false;
    }

}


module.exports = hashing;