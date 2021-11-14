const { createUser, getUserByEmail } = require('../models/User')

const create = async (req, res) => {
    const {name, lastName, address, email} = req.body; 
    const newUser = {
        name, 
        last_name: lastName, 
        address, 
        email
    };
    try {
        await createUser(newUser);
        res.send('user created');
    } catch (error) {
        console.log(error.sqlMessage)
        res.status(500).send('there was an error, user not created');
    }
}

const showUser = async (req, res) => {
    const { email } = req.body; 
    console.log(email)
    try {
        const user = await getUserByEmail(email);
        console.log(user)
        res.send('user find');
    } catch (error) {
        res.status(500).send('there was an error, user not found');
    }
}

module.exports = {
    create,
    showUser
}