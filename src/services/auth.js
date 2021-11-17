const jwt = require('jsonwebtoken');

const hashing = require('../utils/hashPassword')
const compare = require('../utils/comparePassword')
const { registerUser, getUserByEmail } = require('../models/User')

const exampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; 

const authUser = async ({ email, password }) => {
    try {
        const user = await getUserByEmail(email);
        const isConfirmPassword = await compare(user.password, password);
        if (!isConfirmPassword) throw 'Contraseña no coincide, No Permitido'; 
        
        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET || exampleToken);
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

        const newUserID = await registerUser(newUser);
        const token = jwt.sign({_id: newUserID}, process.env.TOKEN_SECRET || exampleToken);
        return token;
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