const jwt = require('jsonwebtoken');

const hashing = require('../utils/hashPassword')
const compare = require('../utils/comparePassword')
const { registerUser, getUserByEmail } = require('../models/User')

const authUser = async ({ email, password }) => {
    try {
        const user = await getUserByEmail(email);
        const isConfirmPassword = await compare(user.password, password);
        if (!isConfirmPassword) throw 'Contraseña no coincide, No Permitido'; 
        
        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)
        console.log(token)
        return token;
    } catch (error) {
        console.log('error')
        console.log(error)
        throw error;
    }

}

const userRegistration = async (userData) => {
    const { username:email, password } = userData; 

    try {
        const hashedPassword = await hashing(password);
        if (!hashedPassword) throw 'failed in password hashing';

        const newUser = {
            email,
            password:hashedPassword
        };

        await registerUser(newUser);
        return true;
    } catch (error) {
        // there was an error, user not created
        console.log(error)
        throw error;
    }
}

module.exports = {
    authUser,
    userRegistration,
}